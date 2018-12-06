int centuryFromYear(int year) 
{
  int century = year/100;
  return year > century * 100 ? century + 1 : century;
}

int centuryFromYear(int year) {
  return (year - 1) / 100 + 1;
}