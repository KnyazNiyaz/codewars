#include <stdlib.h>

unsigned long long minValue(const int* values, const size_t len)
{
  int min = 0;
  int digits[10] = {0};
  for (int i=0;i<len;++i)
  {
    digits[values[i]]++;
  }
  for (int i=1;i<=9;++i)
  {
    if (digits[i]) {min *= 10; min += i;} 
  }
  return min;
}