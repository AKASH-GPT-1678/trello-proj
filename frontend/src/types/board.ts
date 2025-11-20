export interface Card {
  id: string;
  title: string;
  description?: string;
  position?: number | null;
  createdAt: string;
  updatedAt: string;
  listId: string;
}

export interface List {
  id: string;
  title: string;
  position?: number | null;
  createdAt: string;
  updatedAt: string;
  boardId: string;
  cards: Card[];
}

export interface Board {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  lists: List[];
}
