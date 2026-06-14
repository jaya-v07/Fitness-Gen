function Button({children, onClick}) {
  return (
    <button className="absolute top-4 right-4 bg-blue-600 hover:bg-blue-100 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
     onClick={onClick}>
      {children}
    </button>  
  );
}
export default Button;