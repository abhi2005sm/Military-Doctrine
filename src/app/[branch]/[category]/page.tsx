import { notFound } from 'next/navigation';
import { getCategoryById, getBranchById, getAssetsByBranch } from '../../../lib/catalogService';
import { CATEGORIES } from '../../../data/categories';
import { BranchId } from '../../../types/catalog';
import { CategoryCatalogClient } from '../../../components/catalog/CategoryCatalogClient';

interface CategoryPageProps {
  params: {
    branch: string;
    category: string;
  };
}

export function generateStaticParams() {
  return CATEGORIES.map(cat => ({
    branch: cat.branchId,
    category: cat.id,
  }));
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const branchId = params.branch as BranchId;
  const categoryId = params.category;

  const branch = getBranchById(branchId);
  const category = getCategoryById(categoryId);

  if (!branch || !category || category.branchId !== branchId) {
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
