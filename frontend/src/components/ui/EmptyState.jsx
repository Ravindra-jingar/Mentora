const EmptyState = ({
       title,
       className = "",
       ...props
}) => {
    return (
        <div className={`
      col-span-full
      flex
     bg-[#050816]
      w-full
      flex-col
      justify-center
      items-center
      text-center
      py-20
      ${className}`
}
      >
        
            <h1   className="
        text-white
        text-4xl
        font-bold
        mb-3">{title}</h1>
        </div>
    )
}

export default EmptyState