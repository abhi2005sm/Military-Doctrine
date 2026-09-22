import { notFound } from 'next/navigation';
import { getCategoryById, getBranchById, getAssetsByBranch } from '../../../lib/catalogService';
import { CATEGORIES } from '../../../data/categories';
import { BRANCH_LIST } from '../../../data/branches';
import { BranchId } from '../../../types/catalog';
import { CategoryCatalogClient } from '../../../components/catalog/CategoryCatalogClient';

interface CategoryPageProps {
  params: {
    branch: string;
    category: string;
  };
}

export function generateStaticParams() {
  const categoryParams = CATEGORIES.map(cat => ({
    branch: cat.branchId,
    category: cat.id,
  }));

  const allCategoryParams = BRANCH_LIST.map(b => ({
    branch: b.id,
    category: 'all',
  }));

  return [...categoryParams, ...allCategoryParams];
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const branchId = params.branch as BranchId;
  const categoryId = params.category;

  const branch = getBranchById(branchId);
  const category = getCategoryById(categoryId, branchId);

  if (!branch || !category || (category.id !== 'all' && category.branchId !== branchId)) {
    notFound();
  }

  const allBranchAssets = getAssetsByBranch(branchId);

  return (
    <CategoryCatalogClient
      category={category}
      branch={branch}
      allBranchAssets={allBranchAssets}
    />
  );
}

