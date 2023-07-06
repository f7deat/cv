import React from "react"

type TechnologiesType = {
    data: string[];
}

const Technologies: React.FC<TechnologiesType> = (props) => {

    const { data } = props;

    const bg = (value: string) => {
        if (['VB.NET'].includes(value)) {
            return 'bg-sky-700';
        }
        if (['C#', 'Bootstrap'].includes(value)) {
            return 'bg-violet-700';
        }
        if (['Angular', 'AngularJs'].includes(value)) {
            return 'bg-red-600';
        }
        if (['VueJs', 'Selelium'].includes(value)) {
            return 'bg-green-600';
        }
        if (['Javascript'].includes(value)) {
            return 'bg-orange-600'
        }
        if (['SQL Server'].includes(value)) {
            return 'bg-yellow-600';
        }
        return 'bg-gray-800';
    }

    return (
        <div className="flex gap-1">
            <span>Technologies:</span>
            {
                data.map((value, i) => (
                    <button type="button" key={i} className={`px-2 hover:opacity-75 text-sm rounded ${bg(value)} text-white`}>{value}</button>
                ))
            }
        </div>
    )
}

export default Technologies