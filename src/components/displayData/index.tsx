const DisplayData = ({ query }: any) => {
  const { loading, data } = query;

  console.log(data.search);

  if (loading) {
    return (
      <div>
        <p>...loading</p>
      </div>
    );
  }

  return (
    <div>
      {data?.viewer?.repositories.edges.map((item: any) => (
        <div>
          <a key={item.node.id} href={item.node.url} target="_blank">
            {item.node.name}
          </a>
          <br />
        </div>
      ))}
    </div>
  );
};

export default DisplayData;
