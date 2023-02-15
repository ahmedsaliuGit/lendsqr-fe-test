type CardPropsType = {
  image?: string;
  title: string;
  amount: number;
};

export const Card = ({ image, title, amount }: CardPropsType) => (
  <div className="card">
    <img src={image} alt="main content user icon" />
    <p className="card__label">{title}</p>
    <p className="card__label card__label--amount">{amount.toLocaleString()}</p>
  </div>
);
