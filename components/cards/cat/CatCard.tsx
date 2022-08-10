export interface ICatCard {
  name: string;
  age: number;
  appointmentBooked: true;
}

const BaseTemplate: React.FC<ICatCard> = ({ name, age, appointmentBooked }) => {
  return (
    <section style={{ backgroundColor: "red" }}>
      <h1 className="bg-blue-500">{name}</h1>
      <h3>{age}</h3>
      <p>
        {appointmentBooked
          ? "appointment is booked"
          : "has not booked appointment yet"}
      </p>
    </section>
  );
};

export default BaseTemplate;
