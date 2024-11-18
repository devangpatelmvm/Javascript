import java.util.Scanner;

public class ReverseNo {
    public static void main(String args[]){
       //  345
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int temp = 0;
        while(n != 0){
            temp = n%10;
            System.out.println(temp);
            n = n/10;
        }


    }
}
