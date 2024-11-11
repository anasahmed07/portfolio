import NumberTicker from "@/components/ui/number-ticker";

export default function Stats() {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            <div className='text-center'>
                <div className="text-4xl font-bold"><NumberTicker className='text-white' value={25} /> +</div>
                <div className="text-sm text-gray-400">Happy Clients</div>
            </div>
            <div className='text-center'>
                <div className="text-4xl font-bold"><NumberTicker className='text-white' value={4} /> +</div>
                <div className="text-sm text-gray-400">Years of Experience</div>
            </div>
            <div className='text-center'>
                <div className="text-4xl font-bold"><NumberTicker className='text-white' value={25} /> +</div>
                <div className="text-sm text-gray-400">Completed Projects</div>
            </div>
            <div className='text-center'>
                <div className="text-4xl font-bold"><NumberTicker className='text-white' value={4} /> +</div>
                <div className="text-sm text-gray-400">Awards Received</div>
            </div>
        </div>
    )
}