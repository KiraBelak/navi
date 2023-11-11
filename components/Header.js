
export default function Header({children}) {

return (
    <div className="bg-black h-16 text-center items-center px-8 text-xl text-white  w-screen flex justify-between">
        <p className="hover:bg-white hover:text-black" >Inicio</p>
        <p>Comida</p>
        <p>Sobre Nosotros</p>
        {children}
        {/* header simple */}
    
        
    </div>
)
}