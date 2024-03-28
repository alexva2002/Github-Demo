import java.util.Scanner;

public class TriangleArea {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.println("Enter the lengths of the three sides of the triangle:");
        double a = scanner.nextDouble();
        double b = scanner.nextDouble();
        double c = scanner.nextDouble();
        
        double area = calculateTriangleArea(a, b, c);
        
        System.out.println("Area of the triangle is: " + area);
        
        scanner.close();
    }
    
    public static double calculateTriangleArea(double a, double b, double c) {
        // Heron's formula
        double s = (a + b + c) / 2;
        double area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
        return area;
    }
}
