function DataComponent() {
    const stats = [
        { value: '+6', label: 'años de oficio' },
        { value: '100%', label: 'masa artesanal' },
        { value: '20+', label: 'pizzas en carta' },
    ]

    return (
        <div className="mt-2 px-6">
            <div className="mx-auto h-px w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />
            <div className="mt-8 flex justify-between">
                {stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                        <p className="text-2xl font-semibold">{stat.value}</p>
                        <p className="mt-1 text-sm text-neutral-500">{stat.label}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DataComponent;
