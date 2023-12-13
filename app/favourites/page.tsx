import EmptyState from "@/app/components/EmptyState";
import getFavouriteListings from "@/app/actions/getFavouriteListings";
import getCurrentUser from "@/app/actions/getCurrentUser";
import FavouritesClient from "@/app/favourites/FavouritesClient";

const ListingPage = async () => {
  const listings = await getFavouriteListings();
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return (
      <EmptyState
        title="No Favourites found"
        subtitle="Looks like you have no favourite listings."
      />
    );
  }

  return <FavouritesClient listings={listings} currentUser={currentUser} />;
};

export default ListingPage;
