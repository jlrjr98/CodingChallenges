package main.java.test;

public class RockPaperScissors {
	
	public static String rps(String p1, String p2) {
		
		String result = null;
		
		if (p1.toLowerCase().equals(p2.toLowerCase())) result = "TIE";
		else if (p1.toLowerCase().equals("rock") & p2.toLowerCase().equals("paper")) result = "Player 2 Wins";
		else if (p1.toLowerCase().equals("scissors") & p2.toLowerCase().equals("paper")) result = "Player 1 Wins";
		else if (p1.toLowerCase().equals("paper") & p2.toLowerCase().equals("scissors")) result = "Player 2 Wins";
		else if (p1.toLowerCase().equals("rock") & p2.toLowerCase().equals("scissors")) result = "Player 1 Wins";
		else if (p1.toLowerCase().equals("scissors") & p2.toLowerCase().equals("rock")) result = "Player 2 Wins";
		else if (p1.toLowerCase().equals("paper") & p2.toLowerCase().equals("rock")) result = "Player 1 Wins";
		
		
		return result;
	}

	
	
}
