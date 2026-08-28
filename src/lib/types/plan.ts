/** Public plan shape from GET /api/v1/plans (raw JSON array). */
export type Plan = {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  price_monthly: string | null;
  price_yearly: string | null;
  currency: string;
  features: string[];
  is_popular: boolean;
  is_contact_sales: boolean;
  is_active: boolean;
  sort_order: number;
};
