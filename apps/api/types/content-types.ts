export type Speaker = {
  name: string;
  bio: string | null;
  photo: string | null;
};

export type Testimonial = {
  quote: string;
  author_name: string;
  order: number;
};

export type Webinar = {
  title: string;
  description: string;
  date: string;
  time: string;
  badge_text: string;
};

// Strapi API response types
export type StrapiResponse<T> = {
  data: T[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};

export type StrapiSingleResponse<T> = {
  data: T;
  meta: {};
};

// Strapi data wrapper
export type StrapiData<T> = {
  id: number;
  attributes: T;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}; 