function removeDuplicates(num)
{
    return [...new Set(num)];
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); 