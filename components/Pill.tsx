interface PillProps {
  label: string;
}

const Pill = ({ label }: PillProps) => {
  return (
    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm cursor-pointer hover:bg-blue-200">
      {label}
    </span>
  );
};

export default Pill;
