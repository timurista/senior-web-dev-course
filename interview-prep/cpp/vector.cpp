class vector
{
  int size;
  double *elem;

public:
  vector(int s)
      : size{s}, elem{new double[s]} {}
  ~vector()
  {
    delete[] elem;
  }
};