export default function MainPage() {
    return (
        <>
            <div className="relative h-screen w-screen">
                <img 
                    className="absolute inset-0 h-full w-full object-cover" 
                    src="background.jpg" 
                    alt="Background" 
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[0%] to-[50%] from-[#fafaf9]/60 to-transparent" />
            </div>
        </>
    );
}
