package main.java.test;

import java.util.ArrayList;
import java.util.regex.Pattern;

public class PigLatin {

public static String pigLatin(String sentence) {
		
		char punc = sentence.charAt(sentence.length() - 1);
		sentence = sentence.substring(0, sentence.length() - 1);
		
		String[] arr = sentence.split(" ");
		ArrayList<String> list = new ArrayList<String>();
		
		for (String s: arr) {
			
			if (Pattern.compile("[aeiouAEIOU]").matcher(Character.toString(s.charAt(0))).matches()) {
				s = s + "way";
			} else {
				s = s.substring(1, s.length()) + s.substring(0, 1) + "ay";
			}
			
			list.add(s.toLowerCase());			
		}
		
		list.set(0, list.get(0).substring(0, 1).toUpperCase() + list.get(0).substring(1, list.get(0).length()));
		
		String newSentence = list.get(0);
		list.remove(0);
		for (String s: list) newSentence = newSentence + " " + s;
		newSentence = newSentence + Character.toString(punc);
		
		return newSentence;
	}
	
}
