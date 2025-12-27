
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Review {
  author: string;
  rating: number;
  content: string;
  date: string;
}

/**
 * Interface for AI-generated project advice and estimates
 */
export interface AIResponse {
  advice: string;
  keyConsiderations: string[];
  suggestedStyles: string[];
  estimatedCost: string;
}
