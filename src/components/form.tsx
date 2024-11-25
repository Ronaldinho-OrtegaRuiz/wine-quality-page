export default function Form() {
    const names: string[] = [
        "Acidez fija",
        "Acidez volátil",
        "Ácido cítrico",
        "Azúcar residual",
        "Cloruros",
        "Dióxido de azufre libre",
        "Dióxido de azufre total",
        "Densidad",
        "pH",
        "Sulfatos",
        "Alcohol",
    ];

    return (
        <div className="min-h-screen w-3/4 flex items-center justify-center ml-20">
            <form className="grid grid-cols-3 gap-6 p-10 rounded-md sm:grid-cols-2">
                {names.map((name, index) => (
                    <div key={index} className="flex flex-col items-start">
                        <label
                            htmlFor={`input${index + 1}`}
                            className="text-lg text-red-950  mb-1 font-semibold"
                        >
                            {name}
                        </label>
                        <input
                            type="text"
                            id={`input${index + 1}`}
                            className="p-2 rounded-md w-full bg-transparent border-b-2 border-red-950 outline-0 text-red-950"
                        />
                    </div>
                ))}
                <button
                    type="submit"
                    className="col-span-3 bg-red-950 text-amber-200 py-2 px-6 rounded-md mt-4 mx-auto sm:col-span-2"
                >
                    Predecir
                </button>
            </form>
        </div>
    );
}
