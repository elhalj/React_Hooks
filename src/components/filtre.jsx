



function Filtre({filtre, setFiltre}) {
    return (  
        <div>
            <input type="text" placeholder="Filtrer par titre" value={filtre.titre} onChange={(e) => setFiltre({ ...filtre, titre: e.target.value})} />
            <input type="number" placeholder="Filtrer par note" value={filtre.note} onChange={(e) => setFiltre({ ...filtre, note: e.target.value})} />
        </div>
    );
}

export default Filtre;