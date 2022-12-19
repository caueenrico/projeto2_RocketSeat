export function Header() {
  const navigation = useNavigation();
  const { secondary100, secondary40, heading } = useTheme();

  return (
    <Container>
      <Title>
        Welcome, {"