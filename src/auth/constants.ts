export const jwtConstants = {
  secret: `${process.env.JWT_KEY}`,
  db: process.env.DB_USER,
};

export const jwtkey = () => {
  const key = process.env.JWT_KEY;
  console.log(key);
  return key;
};
