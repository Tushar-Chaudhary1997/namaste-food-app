import ResturantCard from "./ResturantCard";

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {" "}
        {/* whenever you are using map u should always use key(a unique id) or u can pass index as key but this not good*/}
        {restList.map((restaurant) => (
          <ResturantCard key={restaurant.info.id} restData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
