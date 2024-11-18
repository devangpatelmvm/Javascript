import java.util.Scanner;

public class DigitFrequency {
    public static int getDigitFrequency(int n, int d) {
        int digitFrequency = 0;
        while (n > 0) {
            int digit = n % 10;
            n = n / 10;
            if (digit == d) {
                digitFrequency++;
            }
        }
        return digitFrequency;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int d = sc.nextInt();
        int f = getDigitFrequency(n, d);
        System.out.println(f);
    }
}
