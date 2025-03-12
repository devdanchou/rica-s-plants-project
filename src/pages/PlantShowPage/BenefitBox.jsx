import clsx from "clsx";

const BenefitBox = (props) => {
  const { icon, title, description } = props;
  return (
    <div className="flex flex-col items-center flex-1 px-2 py-4">
      <i className={clsx("text-3xl text-emerald-700", icon)} />
      <div className="my-1 text-slate-700">{title}</div>
      <div className="text-sm text-center text-slate-500">{description}</div>
    </div>
  );
};

export default BenefitBox;
