var argv = process.argv;
var sum = 0;
for(let i = 2; i < argv.length; i++)
{
  sum += Number(argv[i]);

}
sum = sum / (argv.length - 2);
console.log(argv);
console.log(sum);
