/**
 * 
 */
package project_1;

/**
 * @author abhis
 *
 */
public class pangram {

	public static boolean isPangram(String sentence) {

		sentence = sentence.toLowerCase();

		for (char c = 'a'; c <= 'z'; c++) {
			if (sentence.indexOf(c) == -1) {
				return false;
			}
		}

		return true;
	}

	public static void main(String[] args) {
		String sentence = "Pack my box with five dozen liquor jugs.";
		// "I am abhishek dabhade"......not pangram;
		boolean result = isPangram(sentence);

		if (result) {
			System.out.println("The sentence is a pangram.");
		} else {
			System.out.println("The sentence is not a pangram.");
		}

	}

}
