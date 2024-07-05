export default function Item({name, quantity, category}) {
    return(
        <div className="border-gray-500 bg-gray-400 w-full max-w-xs m-4 p-2">
            <h2 className="font-bold text-xl">{name}</h2>
            <p>Get {quantity} from {category}</p>
        </div>
    );
}