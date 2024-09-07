type BookingAddressProps = {
  address: string;
}

function BookingAddress({address}: BookingAddressProps): JSX.Element {
  return (
    <p className="booking-map__address">{`Вы выбрали: ${address}`}</p>
  );
}

export default BookingAddress;
