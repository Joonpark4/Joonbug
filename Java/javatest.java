import java.util.Scanner;
public class javatest{
    public static void main(String[] args){
        double Num[] = new double[3];
        Scanner scn = new Scanner(System.in);

        for(int N=0; N<3; N++){
            System.out.println(N+1 + "번째 번호를 입력하세요");
            Num[N] = scn.nextDouble();
        }
        double avg = (Num[0] + Num[1] + Num[2])/3;
        System.out.println("평균값은 " + avg + "입니다.");
    }
}