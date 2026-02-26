export const ProductImages = ({ product }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <img
        src={product.images?.[0]}
        alt="Front View"
        className="w-full h-[420px] md:h-[500px] object-cover  bg-gray-50"
      />

      {product.images?.[1] && (
        <img
          src={product.images?.[1]}
          alt="Back View"
          className="w-full h-[420px] md:h-[500px] object-cover  bg-gray-50"
        />
      )}
    </div>
  );
};