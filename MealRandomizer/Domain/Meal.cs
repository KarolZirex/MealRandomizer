namespace MealRandomizer.Domain
{
    public class Meal
    {
        public string Name { get; set; } = string.Empty;
        public List<string> Ingredients { get; set; } = new List<string>();
    }
}
