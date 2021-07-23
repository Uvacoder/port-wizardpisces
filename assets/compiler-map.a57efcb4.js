const e={title:"Compiler简介-入门到放弃",description:"Compiler的基本步骤"},t='<h1 id="Map"><a href="#Map"></a><a href="http://craftinginterpreters.com/image/a-map-of-the-territory/mountain.png">Map</a></h1>\n<h3 id="Introduction of map"><a href="#Introduction of map"></a>Introduction of map</h3>\n<ul>\n<li>sourceCode (scanning)-&gt; tokens (parsing)-&gt; syntaxTree(<strong>step3</strong>) (analysis/transform)-&gt; intermediateRepresentation or IR(<strong>step4</strong>) (codeGen)-&gt; machineCode</li>\n<li><strong>step4</strong> -&gt; (Optimizing <strong>step4</strong>)</li>\n<li><strong>step4</strong> (codeGen + sourceMap)-&gt; byteCode(virtualMachine run! )</li>\n<li><strong>step3</strong> -&gt; highLevelLanguage(transpiling) -&gt; <strong>step4</strong>   (short cuts)</li>\n</ul>\n<h3 id="A Map of Territory"><a href="#A Map of Territory"></a>A Map of Territory</h3>\n<ul>\n<li><a href="#The-parts-of-a-language">The-parts-of-a-language</a></li>\n<li><a href="#Compilers-and-Interpreters">Compilers and Interpreters</a></li>\n<li><a href="#Short-cuts-and-alternate-routes">Short-cuts-and-alternate-routes</a></li>\n</ul>\n<h1 id="The-parts-of-a-language"><a href="#The-parts-of-a-language"></a>The-parts-of-a-language</h1>\n<h2 id="Scanning"><a href="#Scanning"></a>Scanning</h2>\n<p>also known as lexing\nA scanner (or lexer) takes in the linear stream of characters and chunks them together into a series of something more akin to &#x201C;words&#x201D;.</p>\n<h2 id="Parsing"><a href="#Parsing"></a>Parsing</h2>\n<p>This is where syntax gets a grammar&#x2014;the ability to compose larger expressions and statements out of smaller parts. Did you ever diagram sentences in English class?</p>\n<h2 id="Static analysis"><a href="#Static analysis"></a>Static analysis</h2>\n<p>The first bit of analysis that most languages do is called binding or resolution. For each identifier we find out where that name is defined and wire the two together. This is where scope comes into play&#x2014;the region of source code where a certain name can be used to refer to a certain declaration.</p>\n<p><strong>Everything up to this point is considered the front end of the implementation.</strong></p>\n<h2 id="Intermediate Representation"><a href="#Intermediate Representation"></a>Intermediate Representation</h2>\n<p>The front end of the pipeline is specific to the source language the program is written in.\nThe back end is concerned with the final architecture where the program will run.\nIn the middle, the code may be stored in some intermediate representation (or IR) that isn&#x2019;t tightly tied to either the source or destination forms (hence &#x201C;intermediate&#x201D;).\nInstead, the IR acts as an interface between these two languages.</p>\n<h2 id="Optimization"><a href="#Optimization"></a>Optimization</h2>\n<p>eg:</p>\n<h3 id="Constant folding"><a href="#Constant folding"></a>Constant folding</h3>\n<p>pennyArea = 3.14159 * (0.75 / 2) * (0.75 / 2);\n-&gt;\npennyArea = 0.4417860938;</p>\n<h2 id="Code Generation"><a href="#Code Generation"></a>Code Generation</h2>\n<p>where &#x201C;code&#x201D; here usually refers to the kind of primitive assembly-like instructions a CPU runs and not the kind of &#x201C;source code&#x201D; a human might want to read.</p>\n<h2 id="Virtual Machine"><a href="#Virtual Machine"></a>Virtual Machine</h2>\n<p>virtual machine (VM), a program that emulates a hypothetical chip supporting your virtual architecture at runtime. Running B in a VM is slower than translating it to native code ahead of time because every instruction must be simulated at runtime each time it executes.\nIn return, you get simplicity and portability.</p>\n<h2 id="Runtime"><a href="#Runtime"></a>Runtime</h2>\n<p>In, say, Go, each compiled application has its own copy of Go&#x2019;s runtime directly embedded in it. If the language is run inside an interpreter or VM, then the runtime lives there. This is how most implementations of languages like Java, Python, and JavaScript work.</p>\n<h1 id="Short-cuts-and-alternate-routes"><a href="#Short-cuts-and-alternate-routes"></a>Short-cuts-and-alternate-routes</h1>\n<h2 id="Single pass compiler"><a href="#Single pass compiler"></a>Single pass compiler</h2>\n<p>Some simple compilers interleave parsing, analysis, and code generation so that they produce output code directly in the parser, without ever allocating any syntax trees or other IRs.</p>\n<p>Pascal and C were designed around this limitation.\nAt the time, memory was so precious that a compiler might not even be able to hold an entire source file in memory, much less the whole program.</p>\n<h2 id="Tree-walk interpreters"><a href="#Tree-walk interpreters"></a>Tree-walk interpreters</h2>\n<h2 id="Transpilers"><a href="#Transpilers"></a>Transpilers</h2>\n<p><strong>source-to-source compiler or transcompiler</strong></p>\n<p>treated some other source language as if it were an intermediate representation\nrun that resulting code through the output language&#x2019;s existing compilation pipeline and you&#x2019;re good to go.\neg: coffee -&gt; javascript, sass -&gt; css</p>\n<p>C compilers were available everywhere UNIX was and produced efficient code, so targeting C was a good way to get your language running on a lot of architectures.</p>\n<p>Web browsers are the &#x201C;machines&#x201D; of today, and their &#x201C;machine code&#x201D; is JavaScript, so these days it seems almost every language out there has a compiler that targets JS since that&#x2019;s the main way to get your code running in a browser.</p>\n<h2 id="Just-in-time compilation"><a href="#Just-in-time compilation"></a>Just-in-time compilation</h2>\n<p>The fastest way to execute code is by compiling it to machine code, but you might not know what architecture your end user&#x2019;s machine supports. What to do?</p>\n<p>You can do the same thing that the HotSpot JVM, Microsoft&#x2019;s CLR and most JavaScript interpreters do. On the end user&#x2019;s machine, when the program is loaded&#x2014;either from source in the case of JS, or platform-independent bytecode for the JVM and CLR&#x2014;you compile it to native for the architecture their computer supports.Naturally enough, this is called just-in-time compilation.</p>\n<p>The most sophisticated JITs insert profiling hooks into the generated code to see which regions are most performance critical and what kind of data is flowing through them. Then, over time, they will automatically recompile those hot spots with more advanced optimizations.</p>\n<h1 id="Compilers-and-Interpreters"><a href="#Compilers-and-Interpreters"></a>Compilers-and-Interpreters</h1>\n<p>What&#x2019;s the difference between a fruit and a vegetable&#xFF1F;</p>\n<p>but actually &#x201C;fruit&#x201D; is a botanical&#xFF08;&#x690D;&#x7269;&#x5B66;&#xFF09; term and &#x201C;vegetable&#x201D; is culinary&#xFF08;&#x70F9;&#x996A;&#xFF09;.There are fruits that aren&#x2019;t vegetables (apples) and vegetables that are not fruits (carrots), but also edible plants that are both fruits and vegetables, like tomatoes.</p>\n<p>What&#x2019;s the difference between a compiler and an interpreter?</p>\n<ul>\n<li>\n<p>Compiling is an implementation technique that involves translating a source language to some other&#x2014;usually lower-level&#x2014;form. When you generate bytecode or machine code, you are compiling. When you transpile to another high-level language you are compiling too.</p>\n</li>\n<li>\n<p>When we say a language implementation &#x201C;is a compiler&#x201D;, we mean it translates source code to some other form but doesn&#x2019;t execute it. The user has to take the resulting output and run it themselves.</p>\n</li>\n<li>\n<p>Conversely, when we say an implementation &#x201C;is an interpreter&#x201D;, we mean it takes in source code and executes it immediately. It runs programs &#x201C;from source&#x201D;.</p>\n</li>\n</ul>\n<p>GCC and Clang take your C code and compile it to machine code. An end user runs that executable directly and may never even know which tool was used to compile it. So those are compilers for C.</p>\n<p>eg:</p>\n<p>If you run go build, it compiles your Go source code to machine code and stops. If you type go run, it does that then immediately executes the generated executable.</p>\n<p>So go is a compiler (you can use it as a tool to compile code without running it), is an interpreter (you can invoke it to immediately run a program from source), and also has a compiler (when you use it as an interpreter, it is still compiling internally).</p>\n<h1 id="Reference"><a href="#Reference"></a>Reference</h1>\n<ul>\n<li>http://craftinginterpreters.com/a-map-of-the-territory.html#transpilers</li>\n<li>https://justinmeiners.github.io/lc3-vm/</li>\n</ul>\n',n=[{level:1,title:"Map",children:[{level:3,title:"Introduction of map",children:[]},{level:3,title:"A Map of Territory",children:[]}]},{level:1,title:"The-parts-of-a-language",children:[{level:2,title:"Scanning",children:[]},{level:2,title:"Parsing",children:[]},{level:2,title:"Static analysis",children:[]},{level:2,title:"Intermediate Representation",children:[]},{level:2,title:"Optimization",children:[{level:3,title:"Constant folding",children:[]}]}]},{level:2,title:"Code Generation",children:[]},{level:2,title:"Virtual Machine",children:[]},{level:2,title:"Runtime",children:[]},{level:1,title:"Short-cuts-and-alternate-routes",children:[{level:2,title:"Single pass compiler",children:[]},{level:2,title:"Tree-walk interpreters",children:[]},{level:2,title:"Transpilers",children:[]},{level:2,title:"Just-in-time compilation",children:[]}]},{level:1,title:"Compilers-and-Interpreters",children:[]},{level:1,title:"Reference",children:[]}];export{e as attributes,t as html,n as nestedHeaders};
