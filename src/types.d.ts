type Row = {
  id: Number | null,
  date: Date,
  amount: Number,
  balance: Number,
  label: String
}

type NewRow = {
  id: number;
  date: string | null | Date;
  amount: number | any;
  balance: number | null;
  label: string | null;
};

