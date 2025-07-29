const FirstComponent = () => {
  // ---> Name jodi thake taile print hobe....

  const name = "Nazmul Hossain";

  const content = name ? `Hello ${name}` : "Hello World!";

  const sum = (a, b) => a + b;

  return (
    <div>
      <h1>{content}</h1>
      <p>Hello {name ? name : "World!"}</p>
      <p>Logical AND : {name && "World!"}</p>
      <p>Logical OR : {name || "World!"}</p>

      <p>ki khobor</p>

      <p>Your mark is {sum(70, 20)}</p>
    </div>
  );
};

export default FirstComponent;
