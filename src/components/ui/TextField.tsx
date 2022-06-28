interface IProp {
  placeholder: string;
}

function TextField({ placeholder }: IProp) {
  return (
    <input
      type="text"
      className="w-full rounded-md border border-gray px-4 py-1 focus-visible:outline-primary"
      placeholder={placeholder}
    />
  );
}

export default TextField;
