export default function Message() {
    const lines = ["La calidad", "del", "vino es:"];
    const quality = 10; // Este valor puede ser dinámico

    return (
        <div className="flex flex-col items-center">

            {/*<h1 className="text-7xl text-amber-200 font-cookie">Calidad de vino</h1>*/}


            {lines.map((line, index) => (
                <span key={index} className="block font-cookie text-amber-200 text-6xl">
                    {line}
                </span>
            ))}
            <span className="block font-cookie text-amber-200 text-9xl mt-4">
                {quality}
            </span>
        </div>
    );
}
