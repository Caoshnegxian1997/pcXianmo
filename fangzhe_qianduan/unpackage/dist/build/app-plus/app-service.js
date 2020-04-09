var __wxAppData = {};
var __wxRoute;
var __wxRouteBegin;
var __wxAppCode__ = {};
var global = {};
var __wxAppCurrentFile__;
if(typeof __WXML_GLOBAL__ !== 'undefined'){
  delete __WXML_GLOBAL__.ops_cached//remove ops_cached(v8 下会有 cache)
}
// var Component = Component || function() {};
// var definePlugin = definePlugin || function() {};
// var requirePlugin = requirePlugin || function() {};
// var Behavior = Behavior || function() {};
var $gwx;
  
/*v0.5vv_20190703_syb_scopedata*/global.__wcc_version__='v0.5vv_20190703_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, r, c){
p.extraAttr = {"t_action": a, "t_rawid": r };
if ( typeof(c) != 'undefined' ) p.extraAttr.t_cid = c;
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'uni-navbar data-v-290d0e7c'])
Z([[4],[[5],[[5],[[5],[[5],[1,'uni-navbar__content data-v-290d0e7c']],[[2,'?:'],[[7],[3,'fixed']],[1,'uni-navbar--fixed'],[1,'']]],[[2,'?:'],[[7],[3,'shadow']],[1,'uni-navbar--shadow'],[1,'']]],[[2,'?:'],[[7],[3,'border']],[1,'uni-navbar--border'],[1,'']]]])
Z([[2,'+'],[[2,'+'],[1,'background-color:'],[[7],[3,'backgroundColor']]],[1,';']])
Z([[7],[3,'statusBar']])
Z([3,'__l'])
Z([3,'data-v-290d0e7c'])
Z([3,'1'])
Z([3,'uni-navbar__header uni-navbar__content_view data-v-290d0e7c'])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'color:'],[[7],[3,'color']]],[1,';']],[[2,'+'],[[2,'+'],[1,'background-color:'],[[7],[3,'backgroundColor']]],[1,';']]])
Z([3,'__e'])
Z([3,'uni-navbar__header-btns uni-navbar__header-btns-left uni-navbar__content_view data-v-290d0e7c'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'onClickLeft']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[6],[[7],[3,'leftIcon']],[3,'length']])
Z(z[4])
Z(z[5])
Z([[7],[3,'color']])
Z([3,'24'])
Z([[7],[3,'leftIcon']])
Z([3,'2'])
Z([[6],[[7],[3,'leftText']],[3,'length']])
Z([3,'left'])
Z([3,'uni-navbar__header-container uni-navbar__content_view data-v-290d0e7c'])
Z([[6],[[7],[3,'title']],[3,'length']])
Z(z[9])
Z([[4],[[5],[[5],[1,'uni-navbar__header-btns uni-navbar__content_view data-v-290d0e7c']],[[2,'?:'],[[6],[[7],[3,'title']],[3,'length']],[1,'uni-navbar__header-btns-right'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'onClickRight']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[6],[[7],[3,'rightIcon']],[3,'length']])
Z(z[4])
Z(z[5])
Z(z[15])
Z(z[16])
Z([[7],[3,'rightIcon']])
Z([3,'3'])
Z([[2,'&&'],[[6],[[7],[3,'rightText']],[3,'length']],[[2,'!'],[[6],[[7],[3,'rightIcon']],[3,'length']]]])
Z([3,'right'])
Z([[7],[3,'fixed']])
Z(z[3])
Z(z[4])
Z(z[5])
Z([3,'4'])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'uni-swiper__warp data-v-219ea54e'])
Z([[2,'==='],[[7],[3,'mode']],[1,'default']])
Z([[2,'==='],[[7],[3,'mode']],[1,'dot']])
Z([[2,'==='],[[7],[3,'mode']],[1,'round']])
Z([[2,'==='],[[7],[3,'mode']],[1,'nav']])
Z([[2,'==='],[[7],[3,'mode']],[1,'indexes']])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'data-v-aea5a644'])
Z([3,'back'])
Z([[6],[[7],[3,'parameter']],[3,'title_right']])
Z([3,'购物车'])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'data-v-02560504'])
Z([3,'back'])
Z([3,'热销排行'])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'#f4f4f4'])
Z([3,'__l'])
Z([3,'data-v-015bf96a'])
Z([3,'back'])
Z([3,'1'])
Z([[4],[[5],[1,'default']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'data-v-53f12324'])
Z([3,'back'])
Z([3,'家具家装'])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z([3,'data-v-ed044f06'])
Z([[4],[[5],[[4],[[5],[[5],[1,'scroll']],[[4],[[5],[[4],[[5],[[5],[1,'scroll']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'+'],[[2,'+'],[1,'height:'],[[6],[[7],[3,'installList']],[3,'height']]],[1,'px']])
Z([3,'__l'])
Z(z[1])
Z([[6],[[7],[3,'installList']],[3,'current']])
Z([3,'content'])
Z([[6],[[6],[[7],[3,'ClassList']],[3,'lv2']],[3,'photos']])
Z([3,'default '])
Z([3,'1'])
Z([[4],[[5],[1,'default']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([1,false])
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'data-v-31ed1e01'])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
function gz$gwx_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx_15)return __WXML_GLOBAL__.ops_cached.$gwx_15
__WXML_GLOBAL__.ops_cached.$gwx_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_15);return __WXML_GLOBAL__.ops_cached.$gwx_15
}
function gz$gwx_16(){
if( __WXML_GLOBAL__.ops_cached.$gwx_16)return __WXML_GLOBAL__.ops_cached.$gwx_16
__WXML_GLOBAL__.ops_cached.$gwx_16=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_16);return __WXML_GLOBAL__.ops_cached.$gwx_16
}
function gz$gwx_17(){
if( __WXML_GLOBAL__.ops_cached.$gwx_17)return __WXML_GLOBAL__.ops_cached.$gwx_17
__WXML_GLOBAL__.ops_cached.$gwx_17=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'data-v-2a6f7eca'])
Z([3,'back'])
Z([3,'测试'])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_17);return __WXML_GLOBAL__.ops_cached.$gwx_17
}
function gz$gwx_18(){
if( __WXML_GLOBAL__.ops_cached.$gwx_18)return __WXML_GLOBAL__.ops_cached.$gwx_18
__WXML_GLOBAL__.ops_cached.$gwx_18=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'data-v-2a7de5b2'])
Z([3,'back'])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_18);return __WXML_GLOBAL__.ops_cached.$gwx_18
}
function gz$gwx_19(){
if( __WXML_GLOBAL__.ops_cached.$gwx_19)return __WXML_GLOBAL__.ops_cached.$gwx_19
__WXML_GLOBAL__.ops_cached.$gwx_19=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'data-v-0041cbbd'])
Z([3,'新闻'])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_19);return __WXML_GLOBAL__.ops_cached.$gwx_19
}
function gz$gwx_20(){
if( __WXML_GLOBAL__.ops_cached.$gwx_20)return __WXML_GLOBAL__.ops_cached.$gwx_20
__WXML_GLOBAL__.ops_cached.$gwx_20=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_20);return __WXML_GLOBAL__.ops_cached.$gwx_20
}
function gz$gwx_21(){
if( __WXML_GLOBAL__.ops_cached.$gwx_21)return __WXML_GLOBAL__.ops_cached.$gwx_21
__WXML_GLOBAL__.ops_cached.$gwx_21=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'data-v-6129d4de'])
Z([3,'back'])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_21);return __WXML_GLOBAL__.ops_cached.$gwx_21
}
function gz$gwx_22(){
if( __WXML_GLOBAL__.ops_cached.$gwx_22)return __WXML_GLOBAL__.ops_cached.$gwx_22
__WXML_GLOBAL__.ops_cached.$gwx_22=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_22);return __WXML_GLOBAL__.ops_cached.$gwx_22
}
function gz$gwx_23(){
if( __WXML_GLOBAL__.ops_cached.$gwx_23)return __WXML_GLOBAL__.ops_cached.$gwx_23
__WXML_GLOBAL__.ops_cached.$gwx_23=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_23);return __WXML_GLOBAL__.ops_cached.$gwx_23
}
function gz$gwx_24(){
if( __WXML_GLOBAL__.ops_cached.$gwx_24)return __WXML_GLOBAL__.ops_cached.$gwx_24
__WXML_GLOBAL__.ops_cached.$gwx_24=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_24);return __WXML_GLOBAL__.ops_cached.$gwx_24
}
function gz$gwx_25(){
if( __WXML_GLOBAL__.ops_cached.$gwx_25)return __WXML_GLOBAL__.ops_cached.$gwx_25
__WXML_GLOBAL__.ops_cached.$gwx_25=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_25);return __WXML_GLOBAL__.ops_cached.$gwx_25
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/navBar/uni-icons/uni-icons.wxml','./components/navBar/uni-nav-bar/uni-nav-bar.wxml','./components/navBar/uni-status-bar/uni-status-bar.wxml','./components/uitls/shippingSite.wxml','./components/uni-swiper-dot/uni-swiper-dot.wxml','./pages/bill/bill.wxml','./pages/bill/billInfo.wxml','./pages/cart/cart.wxml','./pages/category/category.wxml','./pages/category/ranking.wxml','./pages/classification/classInfo.wxml','./pages/classification/classification.wxml','./pages/goodsInfo/goodsInfo.wxml','./pages/home/home.wxml','./pages/index/index.wxml','./pages/index/test.wxml','./pages/install/install.wxml','./pages/login/login.wxml','./pages/news/news.wxml','./pages/news/newsInfo.wxml','./pages/register/register.wxml','./pages/transfer/transfer.wxml','./pages/transfer/transferInfo.wxml','./pages/withdrawal/withdrawal.wxml','./pages/withdrawal/withdrawalInfo.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
var xC=_n('view')
_rz(z,xC,'class',0,e,s,gg)
var fE=_mz(z,'view',['class',1,'style',1],[],e,s,gg)
var cF=_v()
_(fE,cF)
if(_oz(z,3,e,s,gg)){cF.wxVkey=1
var hG=_mz(z,'uni-status-bar',['bind:__l',4,'class',1,'vueId',2],[],e,s,gg)
_(cF,hG)
}
var oH=_mz(z,'view',['class',7,'style',1],[],e,s,gg)
var cI=_mz(z,'view',['bindtap',9,'class',1,'data-event-opts',2],[],e,s,gg)
var oJ=_v()
_(cI,oJ)
if(_oz(z,12,e,s,gg)){oJ.wxVkey=1
var aL=_mz(z,'uni-icons',['bind:__l',13,'class',1,'color',2,'size',3,'type',4,'vueId',5],[],e,s,gg)
_(oJ,aL)
}
var lK=_v()
_(cI,lK)
if(_oz(z,19,e,s,gg)){lK.wxVkey=1
}
var tM=_n('slot')
_rz(z,tM,'name',20,e,s,gg)
_(cI,tM)
oJ.wxXCkey=1
oJ.wxXCkey=3
lK.wxXCkey=1
_(oH,cI)
var eN=_n('view')
_rz(z,eN,'class',21,e,s,gg)
var bO=_v()
_(eN,bO)
if(_oz(z,22,e,s,gg)){bO.wxVkey=1
}
var oP=_n('slot')
_(eN,oP)
bO.wxXCkey=1
_(oH,eN)
var xQ=_mz(z,'view',['bindtap',23,'class',1,'data-event-opts',2],[],e,s,gg)
var oR=_v()
_(xQ,oR)
if(_oz(z,26,e,s,gg)){oR.wxVkey=1
var cT=_mz(z,'uni-icons',['bind:__l',27,'class',1,'color',2,'size',3,'type',4,'vueId',5],[],e,s,gg)
_(oR,cT)
}
var fS=_v()
_(xQ,fS)
if(_oz(z,33,e,s,gg)){fS.wxVkey=1
}
var hU=_n('slot')
_rz(z,hU,'name',34,e,s,gg)
_(xQ,hU)
oR.wxXCkey=1
oR.wxXCkey=3
fS.wxXCkey=1
_(oH,xQ)
_(fE,oH)
cF.wxXCkey=1
cF.wxXCkey=3
_(xC,fE)
var oD=_v()
_(xC,oD)
if(_oz(z,35,e,s,gg)){oD.wxVkey=1
var oV=_v()
_(oD,oV)
if(_oz(z,36,e,s,gg)){oV.wxVkey=1
var cW=_mz(z,'uni-status-bar',['bind:__l',37,'class',1,'vueId',2],[],e,s,gg)
_(oV,cW)
}
oV.wxXCkey=1
oV.wxXCkey=3
}
oD.wxXCkey=1
oD.wxXCkey=3
_(r,xC)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var lY=_n('slot')
_(r,lY)
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var e2=_n('view')
_rz(z,e2,'class',0,e,s,gg)
var c8=_n('slot')
_(e2,c8)
var b3=_v()
_(e2,b3)
if(_oz(z,1,e,s,gg)){b3.wxVkey=1
}
var o4=_v()
_(e2,o4)
if(_oz(z,2,e,s,gg)){o4.wxVkey=1
}
var x5=_v()
_(e2,x5)
if(_oz(z,3,e,s,gg)){x5.wxVkey=1
}
var o6=_v()
_(e2,o6)
if(_oz(z,4,e,s,gg)){o6.wxVkey=1
}
var f7=_v()
_(e2,f7)
if(_oz(z,5,e,s,gg)){f7.wxVkey=1
}
b3.wxXCkey=1
o4.wxXCkey=1
x5.wxXCkey=1
o6.wxXCkey=1
f7.wxXCkey=1
_(r,e2)
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
var oBB=_mz(z,'uni-nav-bar',['bind:__l',0,'class',1,'leftIcon',1,'rightText',2,'title',3,'vueId',4],[],e,s,gg)
_(r,oBB)
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var aDB=_mz(z,'uni-nav-bar',['bind:__l',0,'class',1,'leftIcon',1,'title',2,'vueId',3],[],e,s,gg)
_(r,aDB)
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
var eFB=_mz(z,'uni-nav-bar',['backgroundColor',0,'bind:__l',1,'class',1,'leftIcon',2,'vueId',3,'vueSlots',4],[],e,s,gg)
_(r,eFB)
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
var oHB=_mz(z,'uni-nav-bar',['bind:__l',0,'class',1,'leftIcon',1,'title',2,'vueId',3],[],e,s,gg)
_(r,oHB)
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
var oJB=_mz(z,'scroll-view',['scrollWithAnimation',-1,'scrollY',-1,'bindscroll',0,'class',1,'data-event-opts',1,'style',2],[],e,s,gg)
var fKB=_mz(z,'uni-swiper-dot',['bind:__l',4,'class',1,'current',2,'field',3,'info',4,'mode',5,'vueId',6,'vueSlots',7],[],e,s,gg)
_(oJB,fKB)
_(r,oJB)
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
var hMB=_v()
_(r,hMB)
if(_oz(z,0,e,s,gg)){hMB.wxVkey=1
}
hMB.wxXCkey=1
return r
}
e_[x[12]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
var cOB=_mz(z,'shipping-site',['bind:__l',0,'class',1,'vueId',1],[],e,s,gg)
_(r,cOB)
return r
}
e_[x[13]]={f:m13,j:[],i:[],ti:[],ic:[]}
d_[x[14]]={}
var m14=function(e,s,r,gg){
var z=gz$gwx_15()
return r
}
e_[x[14]]={f:m14,j:[],i:[],ti:[],ic:[]}
d_[x[15]]={}
var m15=function(e,s,r,gg){
var z=gz$gwx_16()
return r
}
e_[x[15]]={f:m15,j:[],i:[],ti:[],ic:[]}
d_[x[16]]={}
var m16=function(e,s,r,gg){
var z=gz$gwx_17()
var tSB=_mz(z,'uni-nav-bar',['bind:__l',0,'class',1,'leftIcon',1,'title',2,'vueId',3],[],e,s,gg)
_(r,tSB)
return r
}
e_[x[16]]={f:m16,j:[],i:[],ti:[],ic:[]}
d_[x[17]]={}
var m17=function(e,s,r,gg){
var z=gz$gwx_18()
var bUB=_mz(z,'uni-nav-bar',['bind:__l',0,'class',1,'leftIcon',1,'vueId',2],[],e,s,gg)
_(r,bUB)
return r
}
e_[x[17]]={f:m17,j:[],i:[],ti:[],ic:[]}
d_[x[18]]={}
var m18=function(e,s,r,gg){
var z=gz$gwx_19()
var xWB=_mz(z,'uni-nav-bar',['bind:__l',0,'class',1,'title',1,'vueId',2],[],e,s,gg)
_(r,xWB)
return r
}
e_[x[18]]={f:m18,j:[],i:[],ti:[],ic:[]}
d_[x[19]]={}
var m19=function(e,s,r,gg){
var z=gz$gwx_20()
return r
}
e_[x[19]]={f:m19,j:[],i:[],ti:[],ic:[]}
d_[x[20]]={}
var m20=function(e,s,r,gg){
var z=gz$gwx_21()
var cZB=_mz(z,'uni-nav-bar',['bind:__l',0,'class',1,'leftIcon',1,'vueId',2],[],e,s,gg)
_(r,cZB)
return r
}
e_[x[20]]={f:m20,j:[],i:[],ti:[],ic:[]}
d_[x[21]]={}
var m21=function(e,s,r,gg){
var z=gz$gwx_22()
return r
}
e_[x[21]]={f:m21,j:[],i:[],ti:[],ic:[]}
d_[x[22]]={}
var m22=function(e,s,r,gg){
var z=gz$gwx_23()
return r
}
e_[x[22]]={f:m22,j:[],i:[],ti:[],ic:[]}
d_[x[23]]={}
var m23=function(e,s,r,gg){
var z=gz$gwx_24()
return r
}
e_[x[23]]={f:m23,j:[],i:[],ti:[],ic:[]}
d_[x[24]]={}
var m24=function(e,s,r,gg){
var z=gz$gwx_25()
return r
}
e_[x[24]]={f:m24,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}



__wxAppCode__['app.json']={"pages":["pages/index/index","pages/classification/classification","pages/home/home","pages/login/login","pages/register/register","pages/install/install","pages/bill/bill","pages/bill/billInfo","pages/transfer/transfer","pages/transfer/transferInfo","pages/withdrawal/withdrawal","pages/withdrawal/withdrawalInfo","pages/news/news","pages/news/newsInfo","pages/cart/cart","pages/index/test","pages/category/category","pages/category/ranking","pages/goodsInfo/goodsInfo","pages/classification/classInfo"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"tabBar":{"color":"#cccccc","selectedColor":"#f0bb53","backgroundColor":"#fff","list":[{"pagePath":"pages/index/index","iconPath":"","selectedIconPath":"","text":"首页"},{"pagePath":"pages/classification/classification","iconPath":"","selectedIconPath":"","text":"分类"},{"pagePath":"pages/cart/cart","iconPath":"","selectedIconPath":"","text":"购物车"},{"pagePath":"pages/news/news","iconPath":"","selectedIconPath":"","text":"新闻"},{"pagePath":"pages/home/home","iconPath":"","selectedIconPath":"","text":"我的"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"company","compilerVersion":"2.4.6","usingComponents":{}};
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['components/navBar/uni-icons/uni-icons.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/navBar/uni-icons/uni-icons.wxml']=$gwx('./components/navBar/uni-icons/uni-icons.wxml');

__wxAppCode__['components/navBar/uni-nav-bar/uni-nav-bar.json']={"usingComponents":{"uni-status-bar":"/components/navBar/uni-status-bar/uni-status-bar","uni-icons":"/components/navBar/uni-icons/uni-icons"},"component":true};
__wxAppCode__['components/navBar/uni-nav-bar/uni-nav-bar.wxml']=$gwx('./components/navBar/uni-nav-bar/uni-nav-bar.wxml');

__wxAppCode__['components/navBar/uni-status-bar/uni-status-bar.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/navBar/uni-status-bar/uni-status-bar.wxml']=$gwx('./components/navBar/uni-status-bar/uni-status-bar.wxml');

__wxAppCode__['components/uitls/shippingSite.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/uitls/shippingSite.wxml']=$gwx('./components/uitls/shippingSite.wxml');

__wxAppCode__['components/uni-swiper-dot/uni-swiper-dot.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/uni-swiper-dot/uni-swiper-dot.wxml']=$gwx('./components/uni-swiper-dot/uni-swiper-dot.wxml');

__wxAppCode__['pages/bill/bill.json']={"navigationStyle":"custom","navigationBarTitleText":"全部账单","usingComponents":{}};
__wxAppCode__['pages/bill/bill.wxml']=$gwx('./pages/bill/bill.wxml');

__wxAppCode__['pages/bill/billInfo.json']={"navigationStyle":"custom","navigationBarTitleText":"账单详情","usingComponents":{}};
__wxAppCode__['pages/bill/billInfo.wxml']=$gwx('./pages/bill/billInfo.wxml');

__wxAppCode__['pages/cart/cart.json']={"navigationStyle":"custom","navigationBarTitleText":"购物车","usingComponents":{"uni-nav-bar":"/components/navBar/uni-nav-bar/uni-nav-bar"}};
__wxAppCode__['pages/cart/cart.wxml']=$gwx('./pages/cart/cart.wxml');

__wxAppCode__['pages/category/category.json']={"navigationStyle":"custom","navigationBarTitleText":"热销排行","usingComponents":{"uni-nav-bar":"/components/navBar/uni-nav-bar/uni-nav-bar","uni-swiper-dot":"/components/uni-swiper-dot/uni-swiper-dot"}};
__wxAppCode__['pages/category/category.wxml']=$gwx('./pages/category/category.wxml');

__wxAppCode__['pages/category/ranking.json']={"navigationStyle":"custom","navigationBarTitleText":"列表","usingComponents":{"uni-nav-bar":"/components/navBar/uni-nav-bar/uni-nav-bar","uni-swiper-dot":"/components/uni-swiper-dot/uni-swiper-dot"}};
__wxAppCode__['pages/category/ranking.wxml']=$gwx('./pages/category/ranking.wxml');

__wxAppCode__['pages/classification/classification.json']={"navigationStyle":"custom","navigationBarTitleText":"分类","usingComponents":{"uni-swiper-dot":"/components/uni-swiper-dot/uni-swiper-dot","uni-nav-bar":"/components/navBar/uni-nav-bar/uni-nav-bar"}};
__wxAppCode__['pages/classification/classification.wxml']=$gwx('./pages/classification/classification.wxml');

__wxAppCode__['pages/classification/classInfo.json']={"navigationStyle":"custom","navigationBarTitleText":"家具家装","usingComponents":{"uni-nav-bar":"/components/navBar/uni-nav-bar/uni-nav-bar"}};
__wxAppCode__['pages/classification/classInfo.wxml']=$gwx('./pages/classification/classInfo.wxml');

__wxAppCode__['pages/goodsInfo/goodsInfo.json']={"navigationStyle":"custom","navigationBarTitleText":"商品详情","usingComponents":{"uni-nav-bar":"/components/navBar/uni-nav-bar/uni-nav-bar"}};
__wxAppCode__['pages/goodsInfo/goodsInfo.wxml']=$gwx('./pages/goodsInfo/goodsInfo.wxml');

__wxAppCode__['pages/home/home.json']={"navigationStyle":"custom","navigationBarTitleText":"我的","usingComponents":{"shipping-site":"/components/uitls/shippingSite"}};
__wxAppCode__['pages/home/home.wxml']=$gwx('./pages/home/home.wxml');

__wxAppCode__['pages/index/index.json']={"navigationStyle":"custom","navigationBarTitleText":"首页","usingComponents":{}};
__wxAppCode__['pages/index/index.wxml']=$gwx('./pages/index/index.wxml');

__wxAppCode__['pages/index/test.json']={"navigationStyle":"custom","navigationBarTitleText":"测试","usingComponents":{}};
__wxAppCode__['pages/index/test.wxml']=$gwx('./pages/index/test.wxml');

__wxAppCode__['pages/install/install.json']={"navigationStyle":"custom","navigationBarTitleText":"设置","usingComponents":{"uni-nav-bar":"/components/navBar/uni-nav-bar/uni-nav-bar"}};
__wxAppCode__['pages/install/install.wxml']=$gwx('./pages/install/install.wxml');

__wxAppCode__['pages/login/login.json']={"navigationStyle":"custom","navigationBarTitleText":"登陆","usingComponents":{"uni-nav-bar":"/components/navBar/uni-nav-bar/uni-nav-bar"}};
__wxAppCode__['pages/login/login.wxml']=$gwx('./pages/login/login.wxml');

__wxAppCode__['pages/news/news.json']={"navigationStyle":"custom","navigationBarTitleText":"新闻","usingComponents":{"uni-nav-bar":"/components/navBar/uni-nav-bar/uni-nav-bar"}};
__wxAppCode__['pages/news/news.wxml']=$gwx('./pages/news/news.wxml');

__wxAppCode__['pages/news/newsInfo.json']={"navigationStyle":"custom","navigationBarTitleText":"新闻详情","usingComponents":{}};
__wxAppCode__['pages/news/newsInfo.wxml']=$gwx('./pages/news/newsInfo.wxml');

__wxAppCode__['pages/register/register.json']={"navigationStyle":"custom","navigationBarTitleText":"注册","usingComponents":{"uni-nav-bar":"/components/navBar/uni-nav-bar/uni-nav-bar"}};
__wxAppCode__['pages/register/register.wxml']=$gwx('./pages/register/register.wxml');

__wxAppCode__['pages/transfer/transfer.json']={"navigationStyle":"custom","navigationBarTitleText":"转账记录","usingComponents":{}};
__wxAppCode__['pages/transfer/transfer.wxml']=$gwx('./pages/transfer/transfer.wxml');

__wxAppCode__['pages/transfer/transferInfo.json']={"navigationStyle":"custom","navigationBarTitleText":"转账详情","usingComponents":{}};
__wxAppCode__['pages/transfer/transferInfo.wxml']=$gwx('./pages/transfer/transferInfo.wxml');

__wxAppCode__['pages/withdrawal/withdrawal.json']={"navigationStyle":"custom","navigationBarTitleText":"提现记录","usingComponents":{}};
__wxAppCode__['pages/withdrawal/withdrawal.wxml']=$gwx('./pages/withdrawal/withdrawal.wxml');

__wxAppCode__['pages/withdrawal/withdrawalInfo.json']={"navigationStyle":"custom","navigationBarTitleText":"提现详情","usingComponents":{}};
__wxAppCode__['pages/withdrawal/withdrawalInfo.wxml']=$gwx('./pages/withdrawal/withdrawalInfo.wxml');



define('common/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{4696:function(e,n,t){"use strict";var o=t("7f87"),u=t.n(o);u.a},"5aa1":function(e,n,t){"use strict";t.r(n);var o=t("a435");for(var u in o)"default"!==u&&function(e){t.d(n,e,function(){return o[e]})}(u);t("4696");var a,r,c=t("2877"),f=Object(c["a"])(o["default"],a,r,!1,null,null,null);n["default"]=f.exports},"7f87":function(e,n,t){},a435:function(e,n,t){"use strict";t.r(n);var o=t("df65"),u=t.n(o);for(var a in o)"default"!==a&&function(e){t.d(n,e,function(){return o[e]})}(a);n["default"]=u.a},df65:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={onLaunch:function(){console.log(e("App Launch"," at App.vue:4"))},onShow:function(){console.log(e("App Show"," at App.vue:7"))},onHide:function(){console.log(e("App Hide"," at App.vue:10"))}};n.default=t}).call(this,t("0de9")["default"])},e79f:function(e,n,t){"use strict";(function(e){t("8de5"),t("921b");var n=a(t("66fd")),o=a(t("5aa1")),u=a(t("10a5"));function a(e){return e&&e.__esModule?e:{default:e}}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},o=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.forEach(function(n){c(e,n,t[n])})}return e}function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}n.default.prototype.$http=new u.default,n.default.config.productionTip=!1,o.default.mpType="app";var f=new n.default(r({},o.default));e(f).$mount()}).call(this,t("6e42")["createApp"])}},[["e79f","common/runtime","common/vendor"]]]);
});
define('common/runtime.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(function (e) {
  function n(n) {
    for (var r, o, u = n[0], s = n[1], c = n[2], p = 0, l = []; p < u.length; p++) {
      o = u[p], i[o] && l.push(i[o][0]), i[o] = 0;
    }

    for (r in s) {
      Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r]);
    }

    f && f(n);

    while (l.length) {
      l.shift()();
    }

    return a.push.apply(a, c || []), t();
  }

  function t() {
    for (var e, n = 0; n < a.length; n++) {
      for (var t = a[n], r = !0, o = 1; o < t.length; o++) {
        var u = t[o];
        0 !== i[u] && (r = !1);
      }

      r && (a.splice(n--, 1), e = s(s.s = t[0]));
    }

    return e;
  }

  var r = {},
      o = {
    "common/runtime": 0
  },
      i = {
    "common/runtime": 0
  },
      a = [];

  function u(e) {
    return s.p + "" + e + ".js";
  }

  function s(n) {
    if (r[n]) return r[n].exports;
    var t = r[n] = {
      i: n,
      l: !1,
      exports: {}
    };
    return e[n].call(t.exports, t, t.exports, s), t.l = !0, t.exports;
  }

  s.e = function (e) {
    var n = [],
        t = {
      "components/navBar/uni-nav-bar/uni-nav-bar": 1,
      "components/uni-swiper-dot/uni-swiper-dot": 1,
      "components/uitls/shippingSite": 1,
      "components/navBar/uni-icons/uni-icons": 1,
      "components/navBar/uni-status-bar/uni-status-bar": 1
    };
    o[e] ? n.push(o[e]) : 0 !== o[e] && t[e] && n.push(o[e] = new Promise(function (n, t) {
      for (var r = ({
        "components/navBar/uni-nav-bar/uni-nav-bar": "components/navBar/uni-nav-bar/uni-nav-bar",
        "components/uni-swiper-dot/uni-swiper-dot": "components/uni-swiper-dot/uni-swiper-dot",
        "components/uitls/shippingSite": "components/uitls/shippingSite",
        "components/navBar/uni-icons/uni-icons": "components/navBar/uni-icons/uni-icons",
        "components/navBar/uni-status-bar/uni-status-bar": "components/navBar/uni-status-bar/uni-status-bar"
      }[e] || e) + ".wxss", i = s.p + r, a = document.getElementsByTagName("link"), u = 0; u < a.length; u++) {
        var c = a[u],
            p = c.getAttribute("data-href") || c.getAttribute("href");
        if ("stylesheet" === c.rel && (p === r || p === i)) return n();
      }

      var l = document.getElementsByTagName("style");

      for (u = 0; u < l.length; u++) {
        c = l[u], p = c.getAttribute("data-href");
        if (p === r || p === i) return n();
      }

      var f = document.createElement("link");
      f.rel = "stylesheet", f.type = "text/css", f.onload = n, f.onerror = function (n) {
        var r = n && n.target && n.target.src || i,
            a = new Error("Loading CSS chunk " + e + " failed.\n(" + r + ")");
        a.request = r, delete o[e], f.parentNode.removeChild(f), t(a);
      }, f.href = i;
      var m = document.getElementsByTagName("head")[0];
      m.appendChild(f);
    }).then(function () {
      o[e] = 0;
    }));
    var r = i[e];
    if (0 !== r) if (r) n.push(r[2]);else {
      var a = new Promise(function (n, t) {
        r = i[e] = [n, t];
      });
      n.push(r[2] = a);
      var c,
          p = document.createElement("script");
      p.charset = "utf-8", p.timeout = 120, s.nc && p.setAttribute("nonce", s.nc), p.src = u(e), c = function c(n) {
        p.onerror = p.onload = null, clearTimeout(l);
        var t = i[e];

        if (0 !== t) {
          if (t) {
            var r = n && ("load" === n.type ? "missing" : n.type),
                o = n && n.target && n.target.src,
                a = new Error("Loading chunk " + e + " failed.\n(" + r + ": " + o + ")");
            a.type = r, a.request = o, t[1](a);
          }

          i[e] = void 0;
        }
      };
      var l = setTimeout(function () {
        c({
          type: "timeout",
          target: p
        });
      }, 12e4);
      p.onerror = p.onload = c, document.head.appendChild(p);
    }
    return Promise.all(n);
  }, s.m = e, s.c = r, s.d = function (e, n, t) {
    s.o(e, n) || Object.defineProperty(e, n, {
      enumerable: !0,
      get: t
    });
  }, s.r = function (e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, s.t = function (e, n) {
    if (1 & n && (e = s(e)), 8 & n) return e;
    if (4 & n && "object" === typeof e && e && e.__esModule) return e;
    var t = Object.create(null);
    if (s.r(t), Object.defineProperty(t, "default", {
      enumerable: !0,
      value: e
    }), 2 & n && "string" != typeof e) for (var r in e) {
      s.d(t, r, function (n) {
        return e[n];
      }.bind(null, r));
    }
    return t;
  }, s.n = function (e) {
    var n = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return s.d(n, "a", n), n;
  }, s.o = function (e, n) {
    return Object.prototype.hasOwnProperty.call(e, n);
  }, s.p = "/", s.oe = function (e) {
    throw console.error(e), e;
  };
  var c = global["webpackJsonp"] = global["webpackJsonp"] || [],
      p = c.push.bind(c);
  c.push = n, c = c.slice();

  for (var l = 0; l < c.length; l++) {
    n(c[l]);
  }

  var f = p;
  t();
})([]);
});
define('common/vendor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/vendor"],{"05ff":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=l(a("a34a")),n=l(a("c663"));function l(t){return t&&t.__esModule?t:{default:t}}function r(t,e,a,u,n,l,r){try{var v=t[l](r),i=v.value}catch(o){return void a(o)}v.done?e(i):Promise.resolve(i).then(u,n)}function v(t){return function(){var e=this,a=arguments;return new Promise(function(u,n){var l=t.apply(e,a);function v(t){r(l,u,n,v,i,"next",t)}function i(t){r(l,u,n,v,i,"throw",t)}v(void 0)})}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var a=0;a<e.length;a++){var u=e[a];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(t,u.key,u)}}function x(t,e,a){return e&&o(t.prototype,e),a&&o(t,a),t}function c(t,e){return!e||"object"!==typeof e&&"function"!==typeof e?s(t):e}function s(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function f(t){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},f(t)}function p(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}function h(t,e){return h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},h(t,e)}var d=function(t){function e(){return i(this,e),c(this,f(e).apply(this,arguments))}return p(e,t),x(e,[{key:"addCollect",value:function(){var t=v(u.default.mark(function t(e){return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.api.post({url:this.config.ajaxUrl.urlList.addCollect,data:e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()},{key:"getCollect",value:function(){var t=v(u.default.mark(function t(e){return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.api.get({url:this.config.ajaxUrl.urlList.getCollect,data:e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()},{key:"getBrowseRecord",value:function(){var t=v(u.default.mark(function t(e){return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.api.get({url:this.config.ajaxUrl.urlList.getBrowseRecord,data:e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()}]),e}(n.default);e.default=d},"0de9":function(t,e,a){"use strict";function u(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function n(){for(var t=arguments.length,e=new Array(t),a=0;a<t;a++)e[a]=arguments[a];var n=e.map(function(t){var e=Object.prototype.toString.call(t);if("[object object]"===e.toLowerCase())try{t="---BEGIN:JSON---"+JSON.stringify(t)+"---END:JSON---"}catch(n){t="[object object]"}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var a=u(t).toUpperCase();t="NUMBER"===a||"BOOLEAN"===a?"---BEGIN:"+a+"---"+t+"---END:"+a+"---":String(t)}return t}),l="";if(n.length>1){var r=n.pop();l=n.join("---COMMA---"),0===r.indexOf(" at ")?l+=r:l+="---COMMA---"+r}else l=n[0];return l}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n},"10a5":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=g(a("be19")),n=g(a("05ff")),l=g(a("705a")),r=g(a("e953")),v=g(a("9786")),i=g(a("fc57")),o=g(a("4f45")),x=g(a("aa70")),c=g(a("a373")),s=g(a("6fe9")),f=g(a("6de8")),p=g(a("6fae")),h=g(a("43b8")),d=g(a("a768")),y=g(a("149a"));function g(t){return t&&t.__esModule?t:{default:t}}function _(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function b(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var w=function t(){_(this,t),b(this,"indexService",new y.default),b(this,"userService",new o.default),b(this,"siteService",new x.default),b(this,"billService",new u.default),b(this,"transferService",new c.default),b(this,"withdrawalService",new s.default),b(this,"classificationService",new l.default),b(this,"questionsAnswersService",new f.default),b(this,"merchantsService",new p.default),b(this,"contentService",new r.default),b(this,"newsService",new h.default),b(this,"goodService",new i.default),b(this,"collectService",new n.default),b(this,"cartService",new v.default),b(this,"raseService",new d.default)};e.default=w},"149a":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=l(a("a34a")),n=l(a("c663"));function l(t){return t&&t.__esModule?t:{default:t}}function r(t,e,a,u,n,l,r){try{var v=t[l](r),i=v.value}catch(o){return void a(o)}v.done?e(i):Promise.resolve(i).then(u,n)}function v(t){return function(){var e=this,a=arguments;return new Promise(function(u,n){var l=t.apply(e,a);function v(t){r(l,u,n,v,i,"next",t)}function i(t){r(l,u,n,v,i,"throw",t)}v(void 0)})}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var a=0;a<e.length;a++){var u=e[a];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(t,u.key,u)}}function x(t,e,a){return e&&o(t.prototype,e),a&&o(t,a),t}function c(t,e){return!e||"object"!==typeof e&&"function"!==typeof e?s(t):e}function s(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function f(t){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},f(t)}function p(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}function h(t,e){return h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},h(t,e)}var d=function(t){function e(){return i(this,e),c(this,f(e).apply(this,arguments))}return p(e,t),x(e,[{key:"getIndex",value:function(){var t=v(u.default.mark(function t(e){return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.api.get({url:this.config.ajaxUrl.urlList.getIndex,data:e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()},{key:"guessLike",value:function(){var t=v(u.default.mark(function t(e){return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.api.get({url:this.config.ajaxUrl.urlList.guessLike,data:e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()}]),e}(n.default);e.default=d},2877:function(t,e,a){"use strict";function u(t,e,a,u,n,l,r,v){var i,o="function"===typeof t?t.options:t;if(e&&(o.render=e,o.staticRenderFns=a,o._compiled=!0),u&&(o.functional=!0),l&&(o._scopeId="data-v-"+l),r?(i=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},o._ssrRegister=i):n&&(i=v?function(){n.call(this,this.$root.$options.shadowRoot)}:n),i)if(o.functional){o._injectStyles=i;var x=o.render;o.render=function(t,e){return i.call(e),x(t,e)}}else{var c=o.beforeCreate;o.beforeCreate=c?[].concat(c,i):[i]}return{exports:t,options:o}}a.d(e,"a",function(){return u})},"327a":function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=l(a("ce8c")),n=l(a("c7e0"));function l(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function v(t,e){for(var a=0;a<e.length;a++){var u=e[a];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(t,u.key,u)}}function i(t,e,a){return e&&v(t.prototype,e),a&&v(t,a),t}var o=function(){function e(){r(this,e),this.baseUrl=u.default.ajaxUrl.baseUrl}return i(e,[{key:"post",value:function(e){var a=this,l=t.getStorageSync("token"),r=t.getStorageSync("uid"),v=parseInt((new Date).getTime()/1e3);return new Promise(function(i,o){t.request({url:"".concat(a.baseUrl).concat(e.url),method:"POST",data:e.data,header:{appkey:u.default.ajaxUrl.appkey,appid:u.default.ajaxUrl.appid,timestamp:v,sign:(0,n.default)("".concat(u.default.ajaxUrl.appid,"-").concat(u.default.ajaxUrl.appkey,"-").concat(v).concat(r).concat(l)),token:l,uid:r},success:function(t){i(a.validationData(t))}})})}},{key:"get",value:function(e){var a=this,l=t.getStorageSync("token"),r=t.getStorageSync("uid"),v=parseInt((new Date).getTime()/1e3);return new Promise(function(i,o){t.request({url:"".concat(a.baseUrl).concat(e.url),method:"GET",data:e.data,header:{appkey:u.default.ajaxUrl.appkey,appid:u.default.ajaxUrl.appid,timestamp:v,sign:(0,n.default)("".concat(u.default.ajaxUrl.appid,"-").concat(u.default.ajaxUrl.appkey,"-").concat(v).concat(r).concat(l)),token:l,uid:r},success:function(t){i(a.validationData(t))}})})}},{key:"validationData",value:function(e){switch(e.data.code){case 0:return e.data;case 1001:case 1002:case 1000001:return t.showToast({title:e.data.message,icon:"none",duration:2e3}),e.data.message}}}]),e}(),x=new o;e.default=x}).call(this,a("6e42")["default"])},3577:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u={appid:"__UNI__99A4016"};e.default=u},"3c35":function(t,e){(function(e){t.exports=e}).call(this,{})},4362:function(t,e,a){e.nextTick=function(t){setTimeout(t,0)},e.platform=e.arch=e.execPath=e.title="browser",e.pid=1,e.browser=!0,e.env={},e.argv=[],e.binding=function(t){throw new Error("No such module. (Possibly not yet loaded)")},function(){var t,u="/";e.cwd=function(){return u},e.chdir=function(e){t||(t=a("df7c")),u=t.resolve(e,u)}}(),e.exit=e.kill=e.umask=e.dlopen=e.uptime=e.memoryUsage=e.uvCounters=function(){},e.features={}},"43b8":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=l(a("a34a")),n=l(a("c663"));function l(t){return t&&t.__esModule?t:{default:t}}function r(t,e,a,u,n,l,r){try{var v=t[l](r),i=v.value}catch(o){return void a(o)}v.done?e(i):Promise.resolve(i).then(u,n)}function v(t){return function(){var e=this,a=arguments;return new Promise(function(u,n){var l=t.apply(e,a);function v(t){r(l,u,n,v,i,"next",t)}function i(t){r(l,u,n,v,i,"throw",t)}v(void 0)})}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var a=0;a<e.length;a++){var u=e[a];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(t,u.key,u)}}function x(t,e,a){return e&&o(t.prototype,e),a&&o(t,a),t}function c(t,e){return!e||"object"!==typeof e&&"function"!==typeof e?s(t):e}function s(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function f(t){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},f(t)}function p(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}function h(t,e){return h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},h(t,e)}var d=function(t){function e(){return i(this,e),c(this,f(e).apply(this,arguments))}return p(e,t),x(e,[{key:"getNewsType",value:function(){var t=v(u.default.mark(function t(e){return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.api.get({url:this.config.ajaxUrl.urlList.getNewsType,data:e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()},{key:"getNewsList",value:function(){var t=v(u.default.mark(function t(e){return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.api.get({url:this.config.ajaxUrl.urlList.getNewsList,data:e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()},{key:"getNewsInfo",value:function(){var t=v(u.default.mark(function t(e){return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.api.get({url:this.config.ajaxUrl.urlList.getNewsInfo,data:e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()},{key:"getTypeAdvertising",value:function(){var t=v(u.default.mark(function t(e){return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.api.get({url:this.config.ajaxUrl.urlList.getTypeAdvertising,data:e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()}]),e}(n.default);e.default=d},"4f45":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=l(a("a34a")),n=l(a("c663"));function l(t){return t&&t.__esModule?t:{default:t}}function r(t,e,a,u,n,l,r){try{var v=t[l](r),i=v.value}catch(o){return void a(o)}v.done?e(i):Promise.resolve(i).then(u,n)}function v(t){return function(){var e=this,a=arguments;return new Promise(function(u,n){var l=t.apply(e,a);function v(t){r(l,u,n,v,i,"next",t)}function i(t){r(l,u,n,v,i,"throw",t)}v(void 0)})}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var a=0;a<e.length;a++){var u=e[a];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(t,u.key,u)}}function x(t,e,a){return e&&o(t.prototype,e),a&&o(t,a),t}function c(t,e){return!e||"object"!==typeof e&&"function"!==typeof e?s(t):e}function s(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function f(t){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},f(t)}function p(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}function h(t,e){return h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},h(t,e)}var d=function(t){function e(){return i(this,e),c(this,f(e).apply(this,arguments))}return p(e,t),x(e,[{key:"userLogin",value:function(){var t=v(u.default.mark(function t(e){return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.api.post({url:this.config.ajaxUrl.urlList.login,data:e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()},{key:"userRegist",value:function(){var t=v(u.default.mark(function t(e){return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.api.post({url:this.config.ajaxUrl.urlList.add,data:e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()},{key:"backPassword",value:function(){var t=v(u.default.mark(function t(e){return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.api.post({url:this.config.ajaxUrl.urlList.backPwd,data:e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()},{key:"getSecurity",value:function(){var t=v(u.default.mark(function t(e){return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.api.post({url:this.config.ajaxUrl.urlList.getSecurity,data:e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()},{key:"contrastSecurity",value:function(){var t=v(u.default.mark(function t(e){return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.api.post({url:this.config.ajaxUrl.urlList.contrastSecurity,data:e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()},{key:"getUserInformation",value:function(){var t=v(u.default.mark(function t(e){return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.api.post({url:this.config.ajaxUrl.urlList.getUser,data:e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()},{key:"alterUserPwd",value:function(){var t=v(u.default.mark(function t(e){return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.api.post({url:this.config.ajaxUrl.urlList.alterUserPwd,data:e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()},{key:"alterPayPwd",value:function(){var t=v(u.default.mark(function t(e){return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.api.post({url:this.config.ajaxUrl.urlList.alterPayPwd,data:e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()},{key:"alterUser",value:function(){var t=v(u.default.mark(function t(e){return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.api.post({url:this.config.ajaxUrl.urlList.alterUser,data:e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()},{key:"bindingBankCard",value:function(){var t=v(u.default.mark(function t(e){return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.api.post({url:this.config.ajaxUrl.urlList.bindingBankCard,data:e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()},{key:"bindingWX",value:function(){var t=v(u.default.mark(function t(e){return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.api.post({url:this.config.ajaxUrl.urlList.bindingWX,data:e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()},{key:"antonymCertification",value:function(){var t=v(u.default.mark(function t(e){return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.api.post({url:this.config.ajaxUrl.urlList.antonymCertification,data:e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()},{key:"bindingZFB",value:function(){var t=v(u.default.mark(function t(e){return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.api.post({url:this.config.ajaxUrl.urlList.bindingZFB,data:e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()}]),e}(n.default);e.default=d},"66fd":function(t,e,a){"use strict";a.r(e),function(t){
/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
var a=Object.freeze({});function u(t){return void 0===t||null===t}function n(t){return void 0!==t&&null!==t}function l(t){return!0===t}function r(t){return!1===t}function v(t){return"string"===typeof t||"number"===typeof t||"symbol"===typeof t||"boolean"===typeof t}function i(t){return null!==t&&"object"===typeof t}var o=Object.prototype.toString;function x(t){return"[object Object]"===o.call(t)}function c(t){return"[object RegExp]"===o.call(t)}function s(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function f(t){return n(t)&&"function"===typeof t.then&&"function"===typeof t.catch}function p(t){return null==t?"":Array.isArray(t)||x(t)&&t.toString===o?JSON.stringify(t,null,2):String(t)}function h(t){var e=parseFloat(t);return isNaN(e)?t:e}function d(t,e){for(var a=Object.create(null),u=t.split(","),n=0;n<u.length;n++)a[u[n]]=!0;return e?function(t){return a[t.toLowerCase()]}:function(t){return a[t]}}d("slot,component",!0);var y=d("key,ref,slot,slot-scope,is");function g(t,e){if(t.length){var a=t.indexOf(e);if(a>-1)return t.splice(a,1)}}var _=Object.prototype.hasOwnProperty;function b(t,e){return _.call(t,e)}function w(t){var e=Object.create(null);return function(a){var u=e[a];return u||(e[a]=t(a))}}var m=/-(\w)/g,O=w(function(t){return t.replace(m,function(t,e){return e?e.toUpperCase():""})}),k=w(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),j=/\B([A-Z])/g,S=w(function(t){return t.replace(j,"-$1").toLowerCase()});function A(t,e){function a(a){var u=arguments.length;return u?u>1?t.apply(e,arguments):t.call(e,a):t.call(e)}return a._length=t.length,a}function E(t,e){return t.bind(e)}var P=Function.prototype.bind?E:A;function $(t,e){e=e||0;var a=t.length-e,u=new Array(a);while(a--)u[a]=t[a+e];return u}function T(t,e){for(var a in e)t[a]=e[a];return t}function R(t){for(var e={},a=0;a<t.length;a++)t[a]&&T(e,t[a]);return e}function C(t,e,a){}var D=function(t,e,a){return!1},I=function(t){return t};function U(t,e){if(t===e)return!0;var a=i(t),u=i(e);if(!a||!u)return!a&&!u&&String(t)===String(e);try{var n=Array.isArray(t),l=Array.isArray(e);if(n&&l)return t.length===e.length&&t.every(function(t,a){return U(t,e[a])});if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(n||l)return!1;var r=Object.keys(t),v=Object.keys(e);return r.length===v.length&&r.every(function(a){return U(t[a],e[a])})}catch(o){return!1}}function L(t,e){for(var a=0;a<t.length;a++)if(U(t[a],e))return a;return-1}function M(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var N=["component","directive","filter"],B=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],H={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:D,isReservedAttr:D,isUnknownElement:D,getTagNamespace:C,parsePlatformTagName:I,mustUseProp:D,async:!0,_lifecycleHooks:B},F=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function q(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function V(t,e,a,u){Object.defineProperty(t,e,{value:a,enumerable:!!u,writable:!0,configurable:!0})}var W=new RegExp("[^"+F.source+".$_\\d]");function X(t){if(!W.test(t)){var e=t.split(".");return function(t){for(var a=0;a<e.length;a++){if(!t)return;t=t[e[a]]}return t}}}var z,J="__proto__"in{},G="undefined"!==typeof window,Y="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,K=Y&&WXEnvironment.platform.toLowerCase(),Z=G&&window.navigator.userAgent.toLowerCase(),Q=Z&&/msie|trident/.test(Z),tt=(Z&&Z.indexOf("msie 9.0"),Z&&Z.indexOf("edge/")>0),et=(Z&&Z.indexOf("android"),Z&&/iphone|ipad|ipod|ios/.test(Z)||"ios"===K),at=(Z&&/chrome\/\d+/.test(Z),Z&&/phantomjs/.test(Z),Z&&Z.match(/firefox\/(\d+)/),{}.watch);if(G)try{var ut={};Object.defineProperty(ut,"passive",{get:function(){}}),window.addEventListener("test-passive",null,ut)}catch(tn){}var nt=function(){return void 0===z&&(z=!G&&!Y&&"undefined"!==typeof t&&(t["process"]&&"server"===t["process"].env.VUE_ENV)),z},lt=G&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function rt(t){return"function"===typeof t&&/native code/.test(t.toString())}var vt,it="undefined"!==typeof Symbol&&rt(Symbol)&&"undefined"!==typeof Reflect&&rt(Reflect.ownKeys);vt="undefined"!==typeof Set&&rt(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var ot=C,xt=0,ct=function(){this.id=xt++,this.subs=[]};function st(t){ct.SharedObject.targetStack.push(t),ct.SharedObject.target=t}function ft(){ct.SharedObject.targetStack.pop(),ct.SharedObject.target=ct.SharedObject.targetStack[ct.SharedObject.targetStack.length-1]}ct.prototype.addSub=function(t){this.subs.push(t)},ct.prototype.removeSub=function(t){g(this.subs,t)},ct.prototype.depend=function(){ct.SharedObject.target&&ct.SharedObject.target.addDep(this)},ct.prototype.notify=function(){var t=this.subs.slice();for(var e=0,a=t.length;e<a;e++)t[e].update()},ct.SharedObject="undefined"!==typeof SharedObject?SharedObject:{},ct.SharedObject.target=null,ct.SharedObject.targetStack=[];var pt=function(t,e,a,u,n,l,r,v){this.tag=t,this.data=e,this.children=a,this.text=u,this.elm=n,this.ns=void 0,this.context=l,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=r,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=v,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},ht={child:{configurable:!0}};ht.child.get=function(){return this.componentInstance},Object.defineProperties(pt.prototype,ht);var dt=function(t){void 0===t&&(t="");var e=new pt;return e.text=t,e.isComment=!0,e};function yt(t){return new pt(void 0,void 0,void 0,String(t))}function gt(t){var e=new pt(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}var _t=Array.prototype,bt=Object.create(_t),wt=["push","pop","shift","unshift","splice","sort","reverse"];wt.forEach(function(t){var e=_t[t];V(bt,t,function(){var a=[],u=arguments.length;while(u--)a[u]=arguments[u];var n,l=e.apply(this,a),r=this.__ob__;switch(t){case"push":case"unshift":n=a;break;case"splice":n=a.slice(2);break}return n&&r.observeArray(n),r.dep.notify(),l})});var mt=Object.getOwnPropertyNames(bt),Ot=!0;function kt(t){Ot=t}var jt=function(t){this.value=t,this.dep=new ct,this.vmCount=0,V(t,"__ob__",this),Array.isArray(t)?(J?t.push!==t.__proto__.push?At(t,bt,mt):St(t,bt):At(t,bt,mt),this.observeArray(t)):this.walk(t)};function St(t,e){t.__proto__=e}function At(t,e,a){for(var u=0,n=a.length;u<n;u++){var l=a[u];V(t,l,e[l])}}function Et(t,e){var a;if(i(t)&&!(t instanceof pt))return b(t,"__ob__")&&t.__ob__ instanceof jt?a=t.__ob__:Ot&&!nt()&&(Array.isArray(t)||x(t))&&Object.isExtensible(t)&&!t._isVue&&(a=new jt(t)),e&&a&&a.vmCount++,a}function Pt(t,e,a,u,n){var l=new ct,r=Object.getOwnPropertyDescriptor(t,e);if(!r||!1!==r.configurable){var v=r&&r.get,i=r&&r.set;v&&!i||2!==arguments.length||(a=t[e]);var o=!n&&Et(a);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=v?v.call(t):a;return ct.SharedObject.target&&(l.depend(),o&&(o.dep.depend(),Array.isArray(e)&&Rt(e))),e},set:function(e){var u=v?v.call(t):a;e===u||e!==e&&u!==u||v&&!i||(i?i.call(t,e):a=e,o=!n&&Et(e),l.notify())}})}}function $t(t,e,a){if(Array.isArray(t)&&s(e))return t.length=Math.max(t.length,e),t.splice(e,1,a),a;if(e in t&&!(e in Object.prototype))return t[e]=a,a;var u=t.__ob__;return t._isVue||u&&u.vmCount?a:u?(Pt(u.value,e,a),u.dep.notify(),a):(t[e]=a,a)}function Tt(t,e){if(Array.isArray(t)&&s(e))t.splice(e,1);else{var a=t.__ob__;t._isVue||a&&a.vmCount||b(t,e)&&(delete t[e],a&&a.dep.notify())}}function Rt(t){for(var e=void 0,a=0,u=t.length;a<u;a++)e=t[a],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&Rt(e)}jt.prototype.walk=function(t){for(var e=Object.keys(t),a=0;a<e.length;a++)Pt(t,e[a])},jt.prototype.observeArray=function(t){for(var e=0,a=t.length;e<a;e++)Et(t[e])};var Ct=H.optionMergeStrategies;function Dt(t,e){if(!e)return t;for(var a,u,n,l=it?Reflect.ownKeys(e):Object.keys(e),r=0;r<l.length;r++)a=l[r],"__ob__"!==a&&(u=t[a],n=e[a],b(t,a)?u!==n&&x(u)&&x(n)&&Dt(u,n):$t(t,a,n));return t}function It(t,e,a){return a?function(){var u="function"===typeof e?e.call(a,a):e,n="function"===typeof t?t.call(a,a):t;return u?Dt(u,n):n}:e?t?function(){return Dt("function"===typeof e?e.call(this,this):e,"function"===typeof t?t.call(this,this):t)}:e:t}function Ut(t,e){var a=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return a?Lt(a):a}function Lt(t){for(var e=[],a=0;a<t.length;a++)-1===e.indexOf(t[a])&&e.push(t[a]);return e}function Mt(t,e,a,u){var n=Object.create(t||null);return e?T(n,e):n}Ct.data=function(t,e,a){return a?It(t,e,a):e&&"function"!==typeof e?t:It(t,e)},B.forEach(function(t){Ct[t]=Ut}),N.forEach(function(t){Ct[t+"s"]=Mt}),Ct.watch=function(t,e,a,u){if(t===at&&(t=void 0),e===at&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var n={};for(var l in T(n,t),e){var r=n[l],v=e[l];r&&!Array.isArray(r)&&(r=[r]),n[l]=r?r.concat(v):Array.isArray(v)?v:[v]}return n},Ct.props=Ct.methods=Ct.inject=Ct.computed=function(t,e,a,u){if(!t)return e;var n=Object.create(null);return T(n,t),e&&T(n,e),n},Ct.provide=It;var Nt=function(t,e){return void 0===e?t:e};function Bt(t,e){var a=t.props;if(a){var u,n,l,r={};if(Array.isArray(a)){u=a.length;while(u--)n=a[u],"string"===typeof n&&(l=O(n),r[l]={type:null})}else if(x(a))for(var v in a)n=a[v],l=O(v),r[l]=x(n)?n:{type:n};else 0;t.props=r}}function Ht(t,e){var a=t.inject;if(a){var u=t.inject={};if(Array.isArray(a))for(var n=0;n<a.length;n++)u[a[n]]={from:a[n]};else if(x(a))for(var l in a){var r=a[l];u[l]=x(r)?T({from:l},r):{from:r}}else 0}}function Ft(t){var e=t.directives;if(e)for(var a in e){var u=e[a];"function"===typeof u&&(e[a]={bind:u,update:u})}}function qt(t,e,a){if("function"===typeof e&&(e=e.options),Bt(e,a),Ht(e,a),Ft(e),!e._base&&(e.extends&&(t=qt(t,e.extends,a)),e.mixins))for(var u=0,n=e.mixins.length;u<n;u++)t=qt(t,e.mixins[u],a);var l,r={};for(l in t)v(l);for(l in e)b(t,l)||v(l);function v(u){var n=Ct[u]||Nt;r[u]=n(t[u],e[u],a,u)}return r}function Vt(t,e,a,u){if("string"===typeof a){var n=t[e];if(b(n,a))return n[a];var l=O(a);if(b(n,l))return n[l];var r=k(l);if(b(n,r))return n[r];var v=n[a]||n[l]||n[r];return v}}function Wt(t,e,a,u){var n=e[t],l=!b(a,t),r=a[t],v=Gt(Boolean,n.type);if(v>-1)if(l&&!b(n,"default"))r=!1;else if(""===r||r===S(t)){var i=Gt(String,n.type);(i<0||v<i)&&(r=!0)}if(void 0===r){r=Xt(u,n,t);var o=Ot;kt(!0),Et(r),kt(o)}return r}function Xt(t,e,a){if(b(e,"default")){var u=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[a]&&void 0!==t._props[a]?t._props[a]:"function"===typeof u&&"Function"!==zt(e.type)?u.call(t):u}}function zt(t){var e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:""}function Jt(t,e){return zt(t)===zt(e)}function Gt(t,e){if(!Array.isArray(e))return Jt(e,t)?0:-1;for(var a=0,u=e.length;a<u;a++)if(Jt(e[a],t))return a;return-1}function Yt(t,e,a){st();try{if(e){var u=e;while(u=u.$parent){var n=u.$options.errorCaptured;if(n)for(var l=0;l<n.length;l++)try{var r=!1===n[l].call(u,t,e,a);if(r)return}catch(tn){Zt(tn,u,"errorCaptured hook")}}}Zt(t,e,a)}finally{ft()}}function Kt(t,e,a,u,n){var l;try{l=a?t.apply(e,a):t.call(e),l&&!l._isVue&&f(l)&&!l._handled&&(l.catch(function(t){return Yt(t,u,n+" (Promise/async)")}),l._handled=!0)}catch(tn){Yt(tn,u,n)}return l}function Zt(t,e,a){if(H.errorHandler)try{return H.errorHandler.call(null,t,e,a)}catch(tn){tn!==t&&Qt(tn,null,"config.errorHandler")}Qt(t,e,a)}function Qt(t,e,a){if(!G&&!Y||"undefined"===typeof console)throw t;console.error(t)}var te,ee=[],ae=!1;function ue(){ae=!1;var t=ee.slice(0);ee.length=0;for(var e=0;e<t.length;e++)t[e]()}if("undefined"!==typeof Promise&&rt(Promise)){var ne=Promise.resolve();te=function(){ne.then(ue),et&&setTimeout(C)}}else if(Q||"undefined"===typeof MutationObserver||!rt(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())te="undefined"!==typeof setImmediate&&rt(setImmediate)?function(){setImmediate(ue)}:function(){setTimeout(ue,0)};else{var le=1,re=new MutationObserver(ue),ve=document.createTextNode(String(le));re.observe(ve,{characterData:!0}),te=function(){le=(le+1)%2,ve.data=String(le)}}function ie(t,e){var a;if(ee.push(function(){if(t)try{t.call(e)}catch(tn){Yt(tn,e,"nextTick")}else a&&a(e)}),ae||(ae=!0,te()),!t&&"undefined"!==typeof Promise)return new Promise(function(t){a=t})}var oe=new vt;function xe(t){ce(t,oe),oe.clear()}function ce(t,e){var a,u,n=Array.isArray(t);if(!(!n&&!i(t)||Object.isFrozen(t)||t instanceof pt)){if(t.__ob__){var l=t.__ob__.dep.id;if(e.has(l))return;e.add(l)}if(n){a=t.length;while(a--)ce(t[a],e)}else{u=Object.keys(t),a=u.length;while(a--)ce(t[u[a]],e)}}}var se=w(function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var a="~"===t.charAt(0);t=a?t.slice(1):t;var u="!"===t.charAt(0);return t=u?t.slice(1):t,{name:t,once:a,capture:u,passive:e}});function fe(t,e){function a(){var t=arguments,u=a.fns;if(!Array.isArray(u))return Kt(u,null,arguments,e,"v-on handler");for(var n=u.slice(),l=0;l<n.length;l++)Kt(n[l],null,t,e,"v-on handler")}return a.fns=t,a}function pe(t,e,a,n,r,v){var i,o,x,c;for(i in t)o=t[i],x=e[i],c=se(i),u(o)||(u(x)?(u(o.fns)&&(o=t[i]=fe(o,v)),l(c.once)&&(o=t[i]=r(c.name,o,c.capture)),a(c.name,o,c.capture,c.passive,c.params)):o!==x&&(x.fns=o,t[i]=x));for(i in e)u(t[i])&&(c=se(i),n(c.name,e[i],c.capture))}function he(t,e,a){var l=e.options.props;if(!u(l)){var r={},v=t.attrs,i=t.props;if(n(v)||n(i))for(var o in l){var x=S(o);de(r,i,o,x,!0)||de(r,v,o,x,!1)}return r}}function de(t,e,a,u,l){if(n(e)){if(b(e,a))return t[a]=e[a],l||delete e[a],!0;if(b(e,u))return t[a]=e[u],l||delete e[u],!0}return!1}function ye(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}function ge(t){return v(t)?[yt(t)]:Array.isArray(t)?be(t):void 0}function _e(t){return n(t)&&n(t.text)&&r(t.isComment)}function be(t,e){var a,r,i,o,x=[];for(a=0;a<t.length;a++)r=t[a],u(r)||"boolean"===typeof r||(i=x.length-1,o=x[i],Array.isArray(r)?r.length>0&&(r=be(r,(e||"")+"_"+a),_e(r[0])&&_e(o)&&(x[i]=yt(o.text+r[0].text),r.shift()),x.push.apply(x,r)):v(r)?_e(o)?x[i]=yt(o.text+r):""!==r&&x.push(yt(r)):_e(r)&&_e(o)?x[i]=yt(o.text+r.text):(l(t._isVList)&&n(r.tag)&&u(r.key)&&n(e)&&(r.key="__vlist"+e+"_"+a+"__"),x.push(r)));return x}function we(t){var e=t.$options.provide;e&&(t._provided="function"===typeof e?e.call(t):e)}function me(t){var e=Oe(t.$options.inject,t);e&&(kt(!1),Object.keys(e).forEach(function(a){Pt(t,a,e[a])}),kt(!0))}function Oe(t,e){if(t){for(var a=Object.create(null),u=it?Reflect.ownKeys(t):Object.keys(t),n=0;n<u.length;n++){var l=u[n];if("__ob__"!==l){var r=t[l].from,v=e;while(v){if(v._provided&&b(v._provided,r)){a[l]=v._provided[r];break}v=v.$parent}if(!v)if("default"in t[l]){var i=t[l].default;a[l]="function"===typeof i?i.call(e):i}else 0}}return a}}function ke(t,e){if(!t||!t.length)return{};for(var a={},u=0,n=t.length;u<n;u++){var l=t[u],r=l.data;if(r&&r.attrs&&r.attrs.slot&&delete r.attrs.slot,l.context!==e&&l.fnContext!==e||!r||null==r.slot)l.asyncMeta&&l.asyncMeta.data&&"page"===l.asyncMeta.data.slot?(a["page"]||(a["page"]=[])).push(l):(a.default||(a.default=[])).push(l);else{var v=r.slot,i=a[v]||(a[v]=[]);"template"===l.tag?i.push.apply(i,l.children||[]):i.push(l)}}for(var o in a)a[o].every(je)&&delete a[o];return a}function je(t){return t.isComment&&!t.asyncFactory||" "===t.text}function Se(t,e,u){var n,l=Object.keys(e).length>0,r=t?!!t.$stable:!l,v=t&&t.$key;if(t){if(t._normalized)return t._normalized;if(r&&u&&u!==a&&v===u.$key&&!l&&!u.$hasNormal)return u;for(var i in n={},t)t[i]&&"$"!==i[0]&&(n[i]=Ae(e,i,t[i]))}else n={};for(var o in e)o in n||(n[o]=Ee(e,o));return t&&Object.isExtensible(t)&&(t._normalized=n),V(n,"$stable",r),V(n,"$key",v),V(n,"$hasNormal",l),n}function Ae(t,e,a){var u=function(){var t=arguments.length?a.apply(null,arguments):a({});return t=t&&"object"===typeof t&&!Array.isArray(t)?[t]:ge(t),t&&(0===t.length||1===t.length&&t[0].isComment)?void 0:t};return a.proxy&&Object.defineProperty(t,e,{get:u,enumerable:!0,configurable:!0}),u}function Ee(t,e){return function(){return t[e]}}function Pe(t,e){var a,u,l,r,v;if(Array.isArray(t)||"string"===typeof t)for(a=new Array(t.length),u=0,l=t.length;u<l;u++)a[u]=e(t[u],u);else if("number"===typeof t)for(a=new Array(t),u=0;u<t;u++)a[u]=e(u+1,u);else if(i(t))if(it&&t[Symbol.iterator]){a=[];var o=t[Symbol.iterator](),x=o.next();while(!x.done)a.push(e(x.value,a.length)),x=o.next()}else for(r=Object.keys(t),a=new Array(r.length),u=0,l=r.length;u<l;u++)v=r[u],a[u]=e(t[v],v,u);return n(a)||(a=[]),a._isVList=!0,a}function $e(t,e,a,u){var n,l=this.$scopedSlots[t];l?(a=a||{},u&&(a=T(T({},u),a)),n=l(a)||e):n=this.$slots[t]||e;var r=a&&a.slot;return r?this.$createElement("template",{slot:r},n):n}function Te(t){return Vt(this.$options,"filters",t,!0)||I}function Re(t,e){return Array.isArray(t)?-1===t.indexOf(e):t!==e}function Ce(t,e,a,u,n){var l=H.keyCodes[e]||a;return n&&u&&!H.keyCodes[e]?Re(n,u):l?Re(l,t):u?S(u)!==e:void 0}function De(t,e,a,u,n){if(a)if(i(a)){var l;Array.isArray(a)&&(a=R(a));var r=function(r){if("class"===r||"style"===r||y(r))l=t;else{var v=t.attrs&&t.attrs.type;l=u||H.mustUseProp(e,v,r)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var i=O(r),o=S(r);if(!(i in l)&&!(o in l)&&(l[r]=a[r],n)){var x=t.on||(t.on={});x["update:"+r]=function(t){a[r]=t}}};for(var v in a)r(v)}else;return t}function Ie(t,e){var a=this._staticTrees||(this._staticTrees=[]),u=a[t];return u&&!e?u:(u=a[t]=this.$options.staticRenderFns[t].call(this._renderProxy,null,this),Le(u,"__static__"+t,!1),u)}function Ue(t,e,a){return Le(t,"__once__"+e+(a?"_"+a:""),!0),t}function Le(t,e,a){if(Array.isArray(t))for(var u=0;u<t.length;u++)t[u]&&"string"!==typeof t[u]&&Me(t[u],e+"_"+u,a);else Me(t,e,a)}function Me(t,e,a){t.isStatic=!0,t.key=e,t.isOnce=a}function Ne(t,e){if(e)if(x(e)){var a=t.on=t.on?T({},t.on):{};for(var u in e){var n=a[u],l=e[u];a[u]=n?[].concat(n,l):l}}else;return t}function Be(t,e,a,u){e=e||{$stable:!a};for(var n=0;n<t.length;n++){var l=t[n];Array.isArray(l)?Be(l,e,a):l&&(l.proxy&&(l.fn.proxy=!0),e[l.key]=l.fn)}return u&&(e.$key=u),e}function He(t,e){for(var a=0;a<e.length;a+=2){var u=e[a];"string"===typeof u&&u&&(t[e[a]]=e[a+1])}return t}function Fe(t,e){return"string"===typeof t?e+t:t}function qe(t){t._o=Ue,t._n=h,t._s=p,t._l=Pe,t._t=$e,t._q=U,t._i=L,t._m=Ie,t._f=Te,t._k=Ce,t._b=De,t._v=yt,t._e=dt,t._u=Be,t._g=Ne,t._d=He,t._p=Fe}function Ve(t,e,u,n,r){var v,i=this,o=r.options;b(n,"_uid")?(v=Object.create(n),v._original=n):(v=n,n=n._original);var x=l(o._compiled),c=!x;this.data=t,this.props=e,this.children=u,this.parent=n,this.listeners=t.on||a,this.injections=Oe(o.inject,n),this.slots=function(){return i.$slots||Se(t.scopedSlots,i.$slots=ke(u,n)),i.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Se(t.scopedSlots,this.slots())}}),x&&(this.$options=o,this.$slots=this.slots(),this.$scopedSlots=Se(t.scopedSlots,this.$slots)),o._scopeId?this._c=function(t,e,a,u){var l=ua(v,t,e,a,u,c);return l&&!Array.isArray(l)&&(l.fnScopeId=o._scopeId,l.fnContext=n),l}:this._c=function(t,e,a,u){return ua(v,t,e,a,u,c)}}function We(t,e,u,l,r){var v=t.options,i={},o=v.props;if(n(o))for(var x in o)i[x]=Wt(x,o,e||a);else n(u.attrs)&&ze(i,u.attrs),n(u.props)&&ze(i,u.props);var c=new Ve(u,i,r,l,t),s=v.render.call(null,c._c,c);if(s instanceof pt)return Xe(s,u,c.parent,v,c);if(Array.isArray(s)){for(var f=ge(s)||[],p=new Array(f.length),h=0;h<f.length;h++)p[h]=Xe(f[h],u,c.parent,v,c);return p}}function Xe(t,e,a,u,n){var l=gt(t);return l.fnContext=a,l.fnOptions=u,e.slot&&((l.data||(l.data={})).slot=e.slot),l}function ze(t,e){for(var a in e)t[O(a)]=e[a]}qe(Ve.prototype);var Je={init:function(t,e){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){var a=t;Je.prepatch(a,a)}else{var u=t.componentInstance=Ke(t,ma);u.$mount(e?t.elm:void 0,e)}},prepatch:function(t,e){var a=e.componentOptions,u=e.componentInstance=t.componentInstance;Sa(u,a.propsData,a.listeners,e,a.children)},insert:function(t){var e=t.context,a=t.componentInstance;a._isMounted||(a._isMounted=!0,$a(a,"mounted")),t.data.keepAlive&&(e._isMounted?Fa(a):Ea(a,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?Pa(e,!0):e.$destroy())}},Ge=Object.keys(Je);function Ye(t,e,a,r,v){if(!u(t)){var o=a.$options._base;if(i(t)&&(t=o.extend(t)),"function"===typeof t){var x;if(u(t.cid)&&(x=t,t=fa(x,o),void 0===t))return sa(x,e,a,r,v);e=e||{},cu(t),n(e.model)&&ta(t.options,e);var c=he(e,t,v);if(l(t.options.functional))return We(t,c,e,a,r);var s=e.on;if(e.on=e.nativeOn,l(t.options.abstract)){var f=e.slot;e={},f&&(e.slot=f)}Ze(e);var p=t.options.name||v,h=new pt("vue-component-"+t.cid+(p?"-"+p:""),e,void 0,void 0,void 0,a,{Ctor:t,propsData:c,listeners:s,tag:v,children:r},x);return h}}}function Ke(t,e){var a={_isComponent:!0,_parentVnode:t,parent:e},u=t.data.inlineTemplate;return n(u)&&(a.render=u.render,a.staticRenderFns=u.staticRenderFns),new t.componentOptions.Ctor(a)}function Ze(t){for(var e=t.hook||(t.hook={}),a=0;a<Ge.length;a++){var u=Ge[a],n=e[u],l=Je[u];n===l||n&&n._merged||(e[u]=n?Qe(l,n):l)}}function Qe(t,e){var a=function(a,u){t(a,u),e(a,u)};return a._merged=!0,a}function ta(t,e){var a=t.model&&t.model.prop||"value",u=t.model&&t.model.event||"input";(e.attrs||(e.attrs={}))[a]=e.model.value;var l=e.on||(e.on={}),r=l[u],v=e.model.callback;n(r)?(Array.isArray(r)?-1===r.indexOf(v):r!==v)&&(l[u]=[v].concat(r)):l[u]=v}var ea=1,aa=2;function ua(t,e,a,u,n,r){return(Array.isArray(a)||v(a))&&(n=u,u=a,a=void 0),l(r)&&(n=aa),na(t,e,a,u,n)}function na(t,e,a,u,l){if(n(a)&&n(a.__ob__))return dt();if(n(a)&&n(a.is)&&(e=a.is),!e)return dt();var r,v,i;(Array.isArray(u)&&"function"===typeof u[0]&&(a=a||{},a.scopedSlots={default:u[0]},u.length=0),l===aa?u=ge(u):l===ea&&(u=ye(u)),"string"===typeof e)?(v=t.$vnode&&t.$vnode.ns||H.getTagNamespace(e),r=H.isReservedTag(e)?new pt(H.parsePlatformTagName(e),a,u,void 0,void 0,t):a&&a.pre||!n(i=Vt(t.$options,"components",e))?new pt(e,a,u,void 0,void 0,t):Ye(i,a,t,u,e)):r=Ye(e,a,t,u);return Array.isArray(r)?r:n(r)?(n(v)&&la(r,v),n(a)&&ra(a),r):dt()}function la(t,e,a){if(t.ns=e,"foreignObject"===t.tag&&(e=void 0,a=!0),n(t.children))for(var r=0,v=t.children.length;r<v;r++){var i=t.children[r];n(i.tag)&&(u(i.ns)||l(a)&&"svg"!==i.tag)&&la(i,e,a)}}function ra(t){i(t.style)&&xe(t.style),i(t.class)&&xe(t.class)}function va(t){t._vnode=null,t._staticTrees=null;var e=t.$options,u=t.$vnode=e._parentVnode,n=u&&u.context;t.$slots=ke(e._renderChildren,n),t.$scopedSlots=a,t._c=function(e,a,u,n){return ua(t,e,a,u,n,!1)},t.$createElement=function(e,a,u,n){return ua(t,e,a,u,n,!0)};var l=u&&u.data;Pt(t,"$attrs",l&&l.attrs||a,null,!0),Pt(t,"$listeners",e._parentListeners||a,null,!0)}var ia,oa=null;function xa(t){qe(t.prototype),t.prototype.$nextTick=function(t){return ie(t,this)},t.prototype._render=function(){var t,e=this,a=e.$options,u=a.render,n=a._parentVnode;n&&(e.$scopedSlots=Se(n.data.scopedSlots,e.$slots,e.$scopedSlots)),e.$vnode=n;try{oa=e,t=u.call(e._renderProxy,e.$createElement)}catch(tn){Yt(tn,e,"render"),t=e._vnode}finally{oa=null}return Array.isArray(t)&&1===t.length&&(t=t[0]),t instanceof pt||(t=dt()),t.parent=n,t}}function ca(t,e){return(t.__esModule||it&&"Module"===t[Symbol.toStringTag])&&(t=t.default),i(t)?e.extend(t):t}function sa(t,e,a,u,n){var l=dt();return l.asyncFactory=t,l.asyncMeta={data:e,context:a,children:u,tag:n},l}function fa(t,e){if(l(t.error)&&n(t.errorComp))return t.errorComp;if(n(t.resolved))return t.resolved;var a=oa;if(a&&n(t.owners)&&-1===t.owners.indexOf(a)&&t.owners.push(a),l(t.loading)&&n(t.loadingComp))return t.loadingComp;if(a&&!n(t.owners)){var r=t.owners=[a],v=!0,o=null,x=null;a.$on("hook:destroyed",function(){return g(r,a)});var c=function(t){for(var e=0,a=r.length;e<a;e++)r[e].$forceUpdate();t&&(r.length=0,null!==o&&(clearTimeout(o),o=null),null!==x&&(clearTimeout(x),x=null))},s=M(function(a){t.resolved=ca(a,e),v?r.length=0:c(!0)}),p=M(function(e){n(t.errorComp)&&(t.error=!0,c(!0))}),h=t(s,p);return i(h)&&(f(h)?u(t.resolved)&&h.then(s,p):f(h.component)&&(h.component.then(s,p),n(h.error)&&(t.errorComp=ca(h.error,e)),n(h.loading)&&(t.loadingComp=ca(h.loading,e),0===h.delay?t.loading=!0:o=setTimeout(function(){o=null,u(t.resolved)&&u(t.error)&&(t.loading=!0,c(!1))},h.delay||200)),n(h.timeout)&&(x=setTimeout(function(){x=null,u(t.resolved)&&p(null)},h.timeout)))),v=!1,t.loading?t.loadingComp:t.resolved}}function pa(t){return t.isComment&&t.asyncFactory}function ha(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var a=t[e];if(n(a)&&(n(a.componentOptions)||pa(a)))return a}}function da(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&ba(t,e)}function ya(t,e){ia.$on(t,e)}function ga(t,e){ia.$off(t,e)}function _a(t,e){var a=ia;return function u(){var n=e.apply(null,arguments);null!==n&&a.$off(t,u)}}function ba(t,e,a){ia=t,pe(e,a||{},ya,ga,_a,t),ia=void 0}function wa(t){var e=/^hook:/;t.prototype.$on=function(t,a){var u=this;if(Array.isArray(t))for(var n=0,l=t.length;n<l;n++)u.$on(t[n],a);else(u._events[t]||(u._events[t]=[])).push(a),e.test(t)&&(u._hasHookEvent=!0);return u},t.prototype.$once=function(t,e){var a=this;function u(){a.$off(t,u),e.apply(a,arguments)}return u.fn=e,a.$on(t,u),a},t.prototype.$off=function(t,e){var a=this;if(!arguments.length)return a._events=Object.create(null),a;if(Array.isArray(t)){for(var u=0,n=t.length;u<n;u++)a.$off(t[u],e);return a}var l,r=a._events[t];if(!r)return a;if(!e)return a._events[t]=null,a;var v=r.length;while(v--)if(l=r[v],l===e||l.fn===e){r.splice(v,1);break}return a},t.prototype.$emit=function(t){var e=this,a=e._events[t];if(a){a=a.length>1?$(a):a;for(var u=$(arguments,1),n='event handler for "'+t+'"',l=0,r=a.length;l<r;l++)Kt(a[l],e,u,e,n)}return e}}var ma=null;function Oa(t){var e=ma;return ma=t,function(){ma=e}}function ka(t){var e=t.$options,a=e.parent;if(a&&!e.abstract){while(a.$options.abstract&&a.$parent)a=a.$parent;a.$children.push(t)}t.$parent=a,t.$root=a?a.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function ja(t){t.prototype._update=function(t,e){var a=this,u=a.$el,n=a._vnode,l=Oa(a);a._vnode=t,a.$el=n?a.__patch__(n,t):a.__patch__(a.$el,t,e,!1),l(),u&&(u.__vue__=null),a.$el&&(a.$el.__vue__=a),a.$vnode&&a.$parent&&a.$vnode===a.$parent._vnode&&(a.$parent.$el=a.$el)},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){$a(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||g(e.$children,t),t._watcher&&t._watcher.teardown();var a=t._watchers.length;while(a--)t._watchers[a].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),$a(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}function Sa(t,e,u,n,l){var r=n.data.scopedSlots,v=t.$scopedSlots,i=!!(r&&!r.$stable||v!==a&&!v.$stable||r&&t.$scopedSlots.$key!==r.$key),o=!!(l||t.$options._renderChildren||i);if(t.$options._parentVnode=n,t.$vnode=n,t._vnode&&(t._vnode.parent=n),t.$options._renderChildren=l,t.$attrs=n.data.attrs||a,t.$listeners=u||a,e&&t.$options.props){kt(!1);for(var x=t._props,c=t.$options._propKeys||[],s=0;s<c.length;s++){var f=c[s],p=t.$options.props;x[f]=Wt(f,p,e,t)}kt(!0),t.$options.propsData=e}u=u||a;var h=t.$options._parentListeners;t.$options._parentListeners=u,ba(t,u,h),o&&(t.$slots=ke(l,n.context),t.$forceUpdate())}function Aa(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function Ea(t,e){if(e){if(t._directInactive=!1,Aa(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var a=0;a<t.$children.length;a++)Ea(t.$children[a]);$a(t,"activated")}}function Pa(t,e){if((!e||(t._directInactive=!0,!Aa(t)))&&!t._inactive){t._inactive=!0;for(var a=0;a<t.$children.length;a++)Pa(t.$children[a]);$a(t,"deactivated")}}function $a(t,e){st();var a=t.$options[e],u=e+" hook";if(a)for(var n=0,l=a.length;n<l;n++)Kt(a[n],t,null,t,u);t._hasHookEvent&&t.$emit("hook:"+e),ft()}var Ta=[],Ra=[],Ca={},Da=!1,Ia=!1,Ua=0;function La(){Ua=Ta.length=Ra.length=0,Ca={},Da=Ia=!1}var Ma=Date.now;if(G&&!Q){var Na=window.performance;Na&&"function"===typeof Na.now&&Ma()>document.createEvent("Event").timeStamp&&(Ma=function(){return Na.now()})}function Ba(){var t,e;for(Ma(),Ia=!0,Ta.sort(function(t,e){return t.id-e.id}),Ua=0;Ua<Ta.length;Ua++)t=Ta[Ua],t.before&&t.before(),e=t.id,Ca[e]=null,t.run();var a=Ra.slice(),u=Ta.slice();La(),qa(a),Ha(u),lt&&H.devtools&&lt.emit("flush")}function Ha(t){var e=t.length;while(e--){var a=t[e],u=a.vm;u._watcher===a&&u._isMounted&&!u._isDestroyed&&$a(u,"updated")}}function Fa(t){t._inactive=!1,Ra.push(t)}function qa(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,Ea(t[e],!0)}function Va(t){var e=t.id;if(null==Ca[e]){if(Ca[e]=!0,Ia){var a=Ta.length-1;while(a>Ua&&Ta[a].id>t.id)a--;Ta.splice(a+1,0,t)}else Ta.push(t);Da||(Da=!0,ie(Ba))}}var Wa=0,Xa=function(t,e,a,u,n){this.vm=t,n&&(t._watcher=this),t._watchers.push(this),u?(this.deep=!!u.deep,this.user=!!u.user,this.lazy=!!u.lazy,this.sync=!!u.sync,this.before=u.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=a,this.id=++Wa,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new vt,this.newDepIds=new vt,this.expression="","function"===typeof e?this.getter=e:(this.getter=X(e),this.getter||(this.getter=C)),this.value=this.lazy?void 0:this.get()};Xa.prototype.get=function(){var t;st(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(tn){if(!this.user)throw tn;Yt(tn,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&xe(t),ft(),this.cleanupDeps()}return t},Xa.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},Xa.prototype.cleanupDeps=function(){var t=this.deps.length;while(t--){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var a=this.depIds;this.depIds=this.newDepIds,this.newDepIds=a,this.newDepIds.clear(),a=this.deps,this.deps=this.newDeps,this.newDeps=a,this.newDeps.length=0},Xa.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Va(this)},Xa.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||i(t)||this.deep){var e=this.value;if(this.value=t,this.user)try{this.cb.call(this.vm,t,e)}catch(tn){Yt(tn,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,t,e)}}},Xa.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},Xa.prototype.depend=function(){var t=this.deps.length;while(t--)this.deps[t].depend()},Xa.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||g(this.vm._watchers,this);var t=this.deps.length;while(t--)this.deps[t].removeSub(this);this.active=!1}};var za={enumerable:!0,configurable:!0,get:C,set:C};function Ja(t,e,a){za.get=function(){return this[e][a]},za.set=function(t){this[e][a]=t},Object.defineProperty(t,a,za)}function Ga(t){t._watchers=[];var e=t.$options;e.props&&Ya(t,e.props),e.methods&&nu(t,e.methods),e.data?Ka(t):Et(t._data={},!0),e.computed&&tu(t,e.computed),e.watch&&e.watch!==at&&lu(t,e.watch)}function Ya(t,e){var a=t.$options.propsData||{},u=t._props={},n=t.$options._propKeys=[],l=!t.$parent;l||kt(!1);var r=function(l){n.push(l);var r=Wt(l,e,a,t);Pt(u,l,r),l in t||Ja(t,"_props",l)};for(var v in e)r(v);kt(!0)}function Ka(t){var e=t.$options.data;e=t._data="function"===typeof e?Za(e,t):e||{},x(e)||(e={});var a=Object.keys(e),u=t.$options.props,n=(t.$options.methods,a.length);while(n--){var l=a[n];0,u&&b(u,l)||q(l)||Ja(t,"_data",l)}Et(e,!0)}function Za(t,e){st();try{return t.call(e,e)}catch(tn){return Yt(tn,e,"data()"),{}}finally{ft()}}var Qa={lazy:!0};function tu(t,e){var a=t._computedWatchers=Object.create(null),u=nt();for(var n in e){var l=e[n],r="function"===typeof l?l:l.get;0,u||(a[n]=new Xa(t,r||C,C,Qa)),n in t||eu(t,n,l)}}function eu(t,e,a){var u=!nt();"function"===typeof a?(za.get=u?au(e):uu(a),za.set=C):(za.get=a.get?u&&!1!==a.cache?au(e):uu(a.get):C,za.set=a.set||C),Object.defineProperty(t,e,za)}function au(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),ct.SharedObject.target&&e.depend(),e.value}}function uu(t){return function(){return t.call(this,this)}}function nu(t,e){t.$options.props;for(var a in e)t[a]="function"!==typeof e[a]?C:P(e[a],t)}function lu(t,e){for(var a in e){var u=e[a];if(Array.isArray(u))for(var n=0;n<u.length;n++)ru(t,a,u[n]);else ru(t,a,u)}}function ru(t,e,a,u){return x(a)&&(u=a,a=a.handler),"string"===typeof a&&(a=t[a]),t.$watch(e,a,u)}function vu(t){var e={get:function(){return this._data}},a={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",a),t.prototype.$set=$t,t.prototype.$delete=Tt,t.prototype.$watch=function(t,e,a){var u=this;if(x(e))return ru(u,t,e,a);a=a||{},a.user=!0;var n=new Xa(u,t,e,a);if(a.immediate)try{e.call(u,n.value)}catch(l){Yt(l,u,'callback for immediate watcher "'+n.expression+'"')}return function(){n.teardown()}}}var iu=0;function ou(t){t.prototype._init=function(t){var e=this;e._uid=iu++,e._isVue=!0,t&&t._isComponent?xu(e,t):e.$options=qt(cu(e.constructor),t||{},e),e._renderProxy=e,e._self=e,ka(e),da(e),va(e),$a(e,"beforeCreate"),"mp-toutiao"!==e.mpHost&&me(e),Ga(e),"mp-toutiao"!==e.mpHost&&we(e),"mp-toutiao"!==e.mpHost&&$a(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function xu(t,e){var a=t.$options=Object.create(t.constructor.options),u=e._parentVnode;a.parent=e.parent,a._parentVnode=u;var n=u.componentOptions;a.propsData=n.propsData,a._parentListeners=n.listeners,a._renderChildren=n.children,a._componentTag=n.tag,e.render&&(a.render=e.render,a.staticRenderFns=e.staticRenderFns)}function cu(t){var e=t.options;if(t.super){var a=cu(t.super),u=t.superOptions;if(a!==u){t.superOptions=a;var n=su(t);n&&T(t.extendOptions,n),e=t.options=qt(a,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function su(t){var e,a=t.options,u=t.sealedOptions;for(var n in a)a[n]!==u[n]&&(e||(e={}),e[n]=a[n]);return e}function fu(t){this._init(t)}function pu(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var a=$(arguments,1);return a.unshift(this),"function"===typeof t.install?t.install.apply(t,a):"function"===typeof t&&t.apply(null,a),e.push(t),this}}function hu(t){t.mixin=function(t){return this.options=qt(this.options,t),this}}function du(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var a=this,u=a.cid,n=t._Ctor||(t._Ctor={});if(n[u])return n[u];var l=t.name||a.options.name;var r=function(t){this._init(t)};return r.prototype=Object.create(a.prototype),r.prototype.constructor=r,r.cid=e++,r.options=qt(a.options,t),r["super"]=a,r.options.props&&yu(r),r.options.computed&&gu(r),r.extend=a.extend,r.mixin=a.mixin,r.use=a.use,N.forEach(function(t){r[t]=a[t]}),l&&(r.options.components[l]=r),r.superOptions=a.options,r.extendOptions=t,r.sealedOptions=T({},r.options),n[u]=r,r}}function yu(t){var e=t.options.props;for(var a in e)Ja(t.prototype,"_props",a)}function gu(t){var e=t.options.computed;for(var a in e)eu(t.prototype,a,e[a])}function _u(t){N.forEach(function(e){t[e]=function(t,a){return a?("component"===e&&x(a)&&(a.name=a.name||t,a=this.options._base.extend(a)),"directive"===e&&"function"===typeof a&&(a={bind:a,update:a}),this.options[e+"s"][t]=a,a):this.options[e+"s"][t]}})}function bu(t){return t&&(t.Ctor.options.name||t.tag)}function wu(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!c(t)&&t.test(e)}function mu(t,e){var a=t.cache,u=t.keys,n=t._vnode;for(var l in a){var r=a[l];if(r){var v=bu(r.componentOptions);v&&!e(v)&&Ou(a,l,u,n)}}}function Ou(t,e,a,u){var n=t[e];!n||u&&n.tag===u.tag||n.componentInstance.$destroy(),t[e]=null,g(a,e)}ou(fu),vu(fu),wa(fu),ja(fu),xa(fu);var ku=[String,RegExp,Array],ju={name:"keep-alive",abstract:!0,props:{include:ku,exclude:ku,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)Ou(this.cache,t,this.keys)},mounted:function(){var t=this;this.$watch("include",function(e){mu(t,function(t){return wu(e,t)})}),this.$watch("exclude",function(e){mu(t,function(t){return!wu(e,t)})})},render:function(){var t=this.$slots.default,e=ha(t),a=e&&e.componentOptions;if(a){var u=bu(a),n=this,l=n.include,r=n.exclude;if(l&&(!u||!wu(l,u))||r&&u&&wu(r,u))return e;var v=this,i=v.cache,o=v.keys,x=null==e.key?a.Ctor.cid+(a.tag?"::"+a.tag:""):e.key;i[x]?(e.componentInstance=i[x].componentInstance,g(o,x),o.push(x)):(i[x]=e,o.push(x),this.max&&o.length>parseInt(this.max)&&Ou(i,o[0],o,this._vnode)),e.data.keepAlive=!0}return e||t&&t[0]}},Su={KeepAlive:ju};function Au(t){var e={get:function(){return H}};Object.defineProperty(t,"config",e),t.util={warn:ot,extend:T,mergeOptions:qt,defineReactive:Pt},t.set=$t,t.delete=Tt,t.nextTick=ie,t.observable=function(t){return Et(t),t},t.options=Object.create(null),N.forEach(function(e){t.options[e+"s"]=Object.create(null)}),t.options._base=t,T(t.options.components,Su),pu(t),hu(t),du(t),_u(t)}Au(fu),Object.defineProperty(fu.prototype,"$isServer",{get:nt}),Object.defineProperty(fu.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(fu,"FunctionalRenderContext",{value:Ve}),fu.version="2.6.10";var Eu="[object Array]",Pu="[object Object]";function $u(t,e){var a={};return Tu(t,e),Ru(t,e,"",a),a}function Tu(t,e){if(t!==e){var a=Du(t),u=Du(e);if(a==Pu&&u==Pu){if(Object.keys(t).length>=Object.keys(e).length)for(var n in e){var l=t[n];void 0===l?t[n]=null:Tu(l,e[n])}}else a==Eu&&u==Eu&&t.length>=e.length&&e.forEach(function(e,a){Tu(t[a],e)})}}function Ru(t,e,a,u){if(t!==e){var n=Du(t),l=Du(e);if(n==Pu)if(l!=Pu||Object.keys(t).length<Object.keys(e).length)Cu(u,a,t);else{var r=function(n){var l=t[n],r=e[n],v=Du(l),i=Du(r);if(v!=Eu&&v!=Pu)l!=e[n]&&Cu(u,(""==a?"":a+".")+n,l);else if(v==Eu)i!=Eu?Cu(u,(""==a?"":a+".")+n,l):l.length<r.length?Cu(u,(""==a?"":a+".")+n,l):l.forEach(function(t,e){Ru(t,r[e],(""==a?"":a+".")+n+"["+e+"]",u)});else if(v==Pu)if(i!=Pu||Object.keys(l).length<Object.keys(r).length)Cu(u,(""==a?"":a+".")+n,l);else for(var o in l)Ru(l[o],r[o],(""==a?"":a+".")+n+"."+o,u)};for(var v in t)r(v)}else n==Eu?l!=Eu?Cu(u,a,t):t.length<e.length?Cu(u,a,t):t.forEach(function(t,n){Ru(t,e[n],a+"["+n+"]",u)}):Cu(u,a,t)}}function Cu(t,e,a){t[e]=a}function Du(t){return Object.prototype.toString.call(t)}function Iu(t){if(t.__next_tick_callbacks&&t.__next_tick_callbacks.length){if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var e=t.$scope;console.log("["+ +new Date+"]["+(e.is||e.route)+"]["+t._uid+"]:flushCallbacks["+t.__next_tick_callbacks.length+"]")}var a=t.__next_tick_callbacks.slice(0);t.__next_tick_callbacks.length=0;for(var u=0;u<a.length;u++)a[u]()}}function Uu(t){return Ta.find(function(e){return t._watcher===e})}function Lu(t,e){if(!t.__next_tick_pending&&!Uu(t)){if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var a=t.$scope;console.log("["+ +new Date+"]["+(a.is||a.route)+"]["+t._uid+"]:nextVueTick")}return ie(e,t)}if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var u=t.$scope;console.log("["+ +new Date+"]["+(u.is||u.route)+"]["+t._uid+"]:nextMPTick")}var n;if(t.__next_tick_callbacks||(t.__next_tick_callbacks=[]),t.__next_tick_callbacks.push(function(){if(e)try{e.call(t)}catch(tn){Yt(tn,t,"nextTick")}else n&&n(t)}),!e&&"undefined"!==typeof Promise)return new Promise(function(t){n=t})}function Mu(t){var e=Object.create(null),a=[].concat(Object.keys(t._data||{}),Object.keys(t._computedWatchers||{}));return a.reduce(function(e,a){return e[a]=t[a],e},e),Object.assign(e,t.$mp.data||{}),Array.isArray(t.$options.behaviors)&&-1!==t.$options.behaviors.indexOf("uni://form-field")&&(e["name"]=t.name,e["value"]=t.value),JSON.parse(JSON.stringify(e))}var Nu=function(t,e){var a=this;if(null!==e&&("page"===this.mpType||"component"===this.mpType)){var u=this.$scope,n=Object.create(null);try{n=Mu(this)}catch(v){console.error(v)}n.__webviewId__=u.data.__webviewId__;var l=Object.create(null);Object.keys(n).forEach(function(t){l[t]=u.data[t]});var r=$u(n,l);Object.keys(r).length?(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG&&console.log("["+ +new Date+"]["+(u.is||u.route)+"]["+this._uid+"]差量更新",JSON.stringify(r)),this.__next_tick_pending=!0,u.setData(r,function(){a.__next_tick_pending=!1,Iu(a)})):Iu(this)}};function Bu(){}function Hu(t,e,a){if(!t.mpType)return t;"app"===t.mpType&&(t.$options.render=Bu),t.$options.render||(t.$options.render=Bu),"mp-toutiao"!==t.mpHost&&$a(t,"beforeMount");var u=function(){t._update(t._render(),a)};return new Xa(t,u,C,{before:function(){t._isMounted&&!t._isDestroyed&&$a(t,"beforeUpdate")}},!0),a=!1,t}function Fu(t,e){return n(t)||n(e)?qu(t,Vu(e)):""}function qu(t,e){return t?e?t+" "+e:t:e||""}function Vu(t){return Array.isArray(t)?Wu(t):i(t)?Xu(t):"string"===typeof t?t:""}function Wu(t){for(var e,a="",u=0,l=t.length;u<l;u++)n(e=Vu(t[u]))&&""!==e&&(a&&(a+=" "),a+=e);return a}function Xu(t){var e="";for(var a in t)t[a]&&(e&&(e+=" "),e+=a);return e}var zu=w(function(t){var e={},a=/;(?![^(]*\))/g,u=/:(.+)/;return t.split(a).forEach(function(t){if(t){var a=t.split(u);a.length>1&&(e[a[0].trim()]=a[1].trim())}}),e});function Ju(t){return Array.isArray(t)?R(t):"string"===typeof t?zu(t):t}var Gu=["createSelectorQuery","createIntersectionObserver","selectAllComponents","selectComponent"];function Yu(t,e){var a=e.split("."),u=a[0];return 0===u.indexOf("__$n")&&(u=parseInt(u.replace("__$n",""))),1===a.length?t[u]:Yu(t[u],a.slice(1).join("."))}function Ku(t){t.config.errorHandler=function(t){console.error(t)};var e=t.prototype.$emit;t.prototype.$emit=function(t){return this.$scope&&t&&this.$scope["triggerEvent"](t,{__args__:$(arguments,1)}),e.apply(this,arguments)},t.prototype.$nextTick=function(t){return Lu(this,t)},Gu.forEach(function(e){t.prototype[e]=function(t){if(this.$scope)return this.$scope[e](t)}}),t.prototype.__init_provide=we,t.prototype.__init_injections=me,t.prototype.__call_hook=function(t,e){var a=this;st();var u,n=a.$options[t],l=t+" hook";if(n)for(var r=0,v=n.length;r<v;r++)u=Kt(n[r],a,e?[e]:null,a,l);return a._hasHookEvent&&a.$emit("hook:"+t),ft(),u},t.prototype.__set_model=function(t,e,a,u){Array.isArray(u)&&(-1!==u.indexOf("trim")&&(a=a.trim()),-1!==u.indexOf("number")&&(a=this._n(a))),t||(t=this),t[e]=a},t.prototype.__set_sync=function(t,e,a){t||(t=this),t[e]=a},t.prototype.__get_orig=function(t){return x(t)&&t["$orig"]||t},t.prototype.__get_value=function(t,e){return Yu(e||this,t)},t.prototype.__get_class=function(t,e){return Fu(e,t)},t.prototype.__get_style=function(t,e){if(!t&&!e)return"";var a=Ju(t),u=e?T(e,a):a;return Object.keys(u).map(function(t){return S(t)+":"+u[t]}).join(";")},t.prototype.__map=function(t,e){var a,u,n,l,r;if(Array.isArray(t)){for(a=new Array(t.length),u=0,n=t.length;u<n;u++)a[u]=e(t[u],u);return a}if(i(t)){for(l=Object.keys(t),a=Object.create(null),u=0,n=l.length;u<n;u++)r=l[u],a[r]=e(t[r],r,u);return a}return[]}}var Zu=["onLaunch","onShow","onHide","onUniNViewMessage","onError","onLoad","onReady","onUnload","onPullDownRefresh","onReachBottom","onTabItemTap","onShareAppMessage","onResize","onPageScroll","onNavigationBarButtonTap","onBackPress","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked","onPageShow","onPageHide","onPageResize"];function Qu(t){var e=t.extend;t.extend=function(t){t=t||{};var a=t.methods;return a&&Object.keys(a).forEach(function(e){-1!==Zu.indexOf(e)&&(t[e]=a[e],delete a[e])}),e.call(this,t)};var a=t.config.optionMergeStrategies,u=a.created;Zu.forEach(function(t){a[t]=u}),t.prototype.__lifecycle_hooks__=Zu}fu.prototype.__patch__=Nu,fu.prototype.$mount=function(t,e){return Hu(this,t,e)},Qu(fu),Ku(fu),e["default"]=fu}.call(this,a("c8ba"))},"6aec":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u={a:[{value:11e4,text:"北京",children:[{value:110100,text:"北京",children:[{value:110101,text:"东城区"},{value:110102,text:"西城区"},{value:110103,text:"崇文区"},{value:110104,text:"宣武区"},{value:110105,text:"朝阳区"},{value:110106,text:"丰台区"},{value:110107,text:"石景山区"},{value:110108,text:"海淀区"},{value:110109,text:"门头沟区"},{value:110111,text:"房山区"},{value:110112,text:"通州区"},{value:110113,text:"顺义区"},{value:110114,text:"昌平区"},{value:110115,text:"大兴区"},{value:110116,text:"怀柔区"},{value:110117,text:"平谷区"},{value:110228,text:"密云县"},{value:110229,text:"延庆县"},{value:110230,text:"其它区"}]}]},{value:12e4,text:"天津",children:[{value:120100,text:"天津市",children:[{value:120101,text:"和平区"},{value:120102,text:"河东区"},{value:120103,text:"河西区"},{value:120104,text:"南开区"},{value:120105,text:"河北区"},{value:120106,text:"红桥区"},{value:120107,text:"塘沽区"},{value:120108,text:"汉沽区"},{value:120109,text:"大港区"},{value:120110,text:"东丽区"},{value:120111,text:"西青区"},{value:120112,text:"津南区"},{value:120113,text:"北辰区"},{value:120114,text:"武清区"},{value:120115,text:"宝坻区"},{value:120116,text:"滨海新区"},{value:120221,text:"宁河县"},{value:120223,text:"静海县"},{value:120225,text:"蓟县"},{value:120226,text:"其它区"}]}]},{value:13e4,text:"河北",children:[{value:130100,text:"石家庄市",children:[{value:130102,text:"长安区"},{value:130103,text:"桥东区"},{value:130104,text:"桥西区"},{value:130105,text:"新华区"},{value:130107,text:"井陉矿区"},{value:130108,text:"裕华区"},{value:130121,text:"井陉县"},{value:130123,text:"正定县"},{value:130124,text:"栾城区"},{value:130125,text:"行唐县"},{value:130126,text:"灵寿县"},{value:130127,text:"高邑县"},{value:130128,text:"深泽县"},{value:130129,text:"赞皇县"},{value:130130,text:"无极县"},{value:130131,text:"平山县"},{value:130132,text:"元氏县"},{value:130133,text:"赵县"},{value:130181,text:"辛集市"},{value:130182,text:"藁城区"},{value:130183,text:"晋州市"},{value:130184,text:"新乐市"},{value:130185,text:"鹿泉区"},{value:130186,text:"其它区"}]},{value:130200,text:"唐山市",children:[{value:130202,text:"路南区"},{value:130203,text:"路北区"},{value:130204,text:"古冶区"},{value:130205,text:"开平区"},{value:130207,text:"丰南区"},{value:130208,text:"丰润区"},{value:130223,text:"滦县"},{value:130224,text:"滦南县"},{value:130225,text:"乐亭县"},{value:130227,text:"迁西县"},{value:130229,text:"玉田县"},{value:130230,text:"曹妃甸区"},{value:130281,text:"遵化市"},{value:130283,text:"迁安市"},{value:130284,text:"其它区"}]},{value:130300,text:"秦皇岛市",children:[{value:130302,text:"海港区"},{value:130303,text:"山海关区"},{value:130304,text:"北戴河区"},{value:130321,text:"青龙满族自治县"},{value:130322,text:"昌黎县"},{value:130323,text:"抚宁县"},{value:130324,text:"卢龙县"},{value:130398,text:"其它区"},{value:130399,text:"经济技术开发区"}]},{value:130400,text:"邯郸市",children:[{value:130402,text:"邯山区"},{value:130403,text:"丛台区"},{value:130404,text:"复兴区"},{value:130406,text:"峰峰矿区"},{value:130421,text:"邯郸县"},{value:130423,text:"临漳县"},{value:130424,text:"成安县"},{value:130425,text:"大名县"},{value:130426,text:"涉县"},{value:130427,text:"磁县"},{value:130428,text:"肥乡县"},{value:130429,text:"永年县"},{value:130430,text:"邱县"},{value:130431,text:"鸡泽县"},{value:130432,text:"广平县"},{value:130433,text:"馆陶县"},{value:130434,text:"魏县"},{value:130435,text:"曲周县"},{value:130481,text:"武安市"},{value:130482,text:"其它区"}]},{value:130500,text:"邢台市",children:[{value:130502,text:"桥东区"},{value:130503,text:"桥西区"},{value:130521,text:"邢台县"},{value:130522,text:"临城县"},{value:130523,text:"内丘县"},{value:130524,text:"柏乡县"},{value:130525,text:"隆尧县"},{value:130526,text:"任县"},{value:130527,text:"南和县"},{value:130528,text:"宁晋县"},{value:130529,text:"巨鹿县"},{value:130530,text:"新河县"},{value:130531,text:"广宗县"},{value:130532,text:"平乡县"},{value:130533,text:"威县"},{value:130534,text:"清河县"},{value:130535,text:"临西县"},{value:130581,text:"南宫市"},{value:130582,text:"沙河市"},{value:130583,text:"其它区"}]},{value:130600,text:"保定市",children:[{value:130602,text:"新市区"},{value:130603,text:"北市区"},{value:130604,text:"南市区"},{value:130621,text:"满城县"},{value:130622,text:"清苑县"},{value:130623,text:"涞水县"},{value:130624,text:"阜平县"},{value:130625,text:"徐水县"},{value:130626,text:"定兴县"},{value:130627,text:"唐县"},{value:130628,text:"高阳县"},{value:130629,text:"容城县"},{value:130630,text:"涞源县"},{value:130631,text:"望都县"},{value:130632,text:"安新县"},{value:130633,text:"易县"},{value:130634,text:"曲阳县"},{value:130635,text:"蠡县"},{value:130636,text:"顺平县"},{value:130637,text:"博野县"},{value:130638,text:"雄县"},{value:130681,text:"涿州市"},{value:130682,text:"定州市"},{value:130683,text:"安国市"},{value:130684,text:"高碑店市"},{value:130698,text:"高开区"},{value:130699,text:"其它区"}]},{value:130700,text:"张家口市",children:[{value:130702,text:"桥东区"},{value:130703,text:"桥西区"},{value:130705,text:"宣化区"},{value:130706,text:"下花园区"},{value:130721,text:"宣化县"},{value:130722,text:"张北县"},{value:130723,text:"康保县"},{value:130724,text:"沽源县"},{value:130725,text:"尚义县"},{value:130726,text:"蔚县"},{value:130727,text:"阳原县"},{value:130728,text:"怀安县"},{value:130729,text:"万全县"},{value:130730,text:"怀来县"},{value:130731,text:"涿鹿县"},{value:130732,text:"赤城县"},{value:130733,text:"崇礼县"},{value:130734,text:"其它区"}]},{value:130800,text:"承德市",children:[{value:130802,text:"双桥区"},{value:130803,text:"双滦区"},{value:130804,text:"鹰手营子矿区"},{value:130821,text:"承德县"},{value:130822,text:"兴隆县"},{value:130823,text:"平泉县"},{value:130824,text:"滦平县"},{value:130825,text:"隆化县"},{value:130826,text:"丰宁满族自治县"},{value:130827,text:"宽城满族自治县"},{value:130828,text:"围场满族蒙古族自治县"},{value:130829,text:"其它区"}]},{value:130900,text:"沧州市",children:[{value:130902,text:"新华区"},{value:130903,text:"运河区"},{value:130921,text:"沧县"},{value:130922,text:"青县"},{value:130923,text:"东光县"},{value:130924,text:"海兴县"},{value:130925,text:"盐山县"},{value:130926,text:"肃宁县"},{value:130927,text:"南皮县"},{value:130928,text:"吴桥县"},{value:130929,text:"献县"},{value:130930,text:"孟村回族自治县"},{value:130981,text:"泊头市"},{value:130982,text:"任丘市"},{value:130983,text:"黄骅市"},{value:130984,text:"河间市"},{value:130985,text:"其它区"}]},{value:131e3,text:"廊坊市",children:[{value:131002,text:"安次区"},{value:131003,text:"广阳区"},{value:131022,text:"固安县"},{value:131023,text:"永清县"},{value:131024,text:"香河县"},{value:131025,text:"大城县"},{value:131026,text:"文安县"},{value:131028,text:"大厂回族自治县"},{value:131051,text:"开发区"},{value:131052,text:"燕郊经济技术开发区"},{value:131081,text:"霸州市"},{value:131082,text:"三河市"},{value:131083,text:"其它区"}]},{value:131100,text:"衡水市",children:[{value:131102,text:"桃城区"},{value:131121,text:"枣强县"},{value:131122,text:"武邑县"},{value:131123,text:"武强县"},{value:131124,text:"饶阳县"},{value:131125,text:"安平县"},{value:131126,text:"故城县"},{value:131127,text:"景县"},{value:131128,text:"阜城县"},{value:131181,text:"冀州市"},{value:131182,text:"深州市"},{value:131183,text:"其它区"}]}]},{value:14e4,text:"山西",children:[{value:140100,text:"太原市",children:[{value:140105,text:"小店区"},{value:140106,text:"迎泽区"},{value:140107,text:"杏花岭区"},{value:140108,text:"尖草坪区"},{value:140109,text:"万柏林区"},{value:140110,text:"晋源区"},{value:140121,text:"清徐县"},{value:140122,text:"阳曲县"},{value:140123,text:"娄烦县"},{value:140181,text:"古交市"},{value:140182,text:"其它区"}]},{value:140200,text:"大同市",children:[{value:140202,text:"城区"},{value:140203,text:"矿区"},{value:140211,text:"南郊区"},{value:140212,text:"新荣区"},{value:140221,text:"阳高县"},{value:140222,text:"天镇县"},{value:140223,text:"广灵县"},{value:140224,text:"灵丘县"},{value:140225,text:"浑源县"},{value:140226,text:"左云县"},{value:140227,text:"大同县"},{value:140228,text:"其它区"}]},{value:140300,text:"阳泉市",children:[{value:140302,text:"城区"},{value:140303,text:"矿区"},{value:140311,text:"郊区"},{value:140321,text:"平定县"},{value:140322,text:"盂县"},{value:140323,text:"其它区"}]},{value:140400,text:"长治市",children:[{value:140421,text:"长治县"},{value:140423,text:"襄垣县"},{value:140424,text:"屯留县"},{value:140425,text:"平顺县"},{value:140426,text:"黎城县"},{value:140427,text:"壶关县"},{value:140428,text:"长子县"},{value:140429,text:"武乡县"},{value:140430,text:"沁县"},{value:140431,text:"沁源县"},{value:140481,text:"潞城市"},{value:140482,text:"城区"},{value:140483,text:"郊区"},{value:140484,text:"高新区"},{value:140485,text:"其它区"}]},{value:140500,text:"晋城市",children:[{value:140502,text:"城区"},{value:140521,text:"沁水县"},{value:140522,text:"阳城县"},{value:140524,text:"陵川县"},{value:140525,text:"泽州县"},{value:140581,text:"高平市"},{value:140582,text:"其它区"}]},{value:140600,text:"朔州市",children:[{value:140602,text:"朔城区"},{value:140603,text:"平鲁区"},{value:140621,text:"山阴县"},{value:140622,text:"应县"},{value:140623,text:"右玉县"},{value:140624,text:"怀仁县"},{value:140625,text:"其它区"}]},{value:140700,text:"晋中市",children:[{value:140702,text:"榆次区"},{value:140721,text:"榆社县"},{value:140722,text:"左权县"},{value:140723,text:"和顺县"},{value:140724,text:"昔阳县"},{value:140725,text:"寿阳县"},{value:140726,text:"太谷县"},{value:140727,text:"祁县"},{value:140728,text:"平遥县"},{value:140729,text:"灵石县"},{value:140781,text:"介休市"},{value:140782,text:"其它区"}]},{value:140800,text:"运城市",children:[{value:140802,text:"盐湖区"},{value:140821,text:"临猗县"},{value:140822,text:"万荣县"},{value:140823,text:"闻喜县"},{value:140824,text:"稷山县"},{value:140825,text:"新绛县"},{value:140826,text:"绛县"},{value:140827,text:"垣曲县"},{value:140828,text:"夏县"},{value:140829,text:"平陆县"},{value:140830,text:"芮城县"},{value:140881,text:"永济市"},{value:140882,text:"河津市"},{value:140883,text:"其它区"}]},{value:140900,text:"忻州市",children:[{value:140902,text:"忻府区"},{value:140921,text:"定襄县"},{value:140922,text:"五台县"},{value:140923,text:"代县"},{value:140924,text:"繁峙县"},{value:140925,text:"宁武县"},{value:140926,text:"静乐县"},{value:140927,text:"神池县"},{value:140928,text:"五寨县"},{value:140929,text:"岢岚县"},{value:140930,text:"河曲县"},{value:140931,text:"保德县"},{value:140932,text:"偏关县"},{value:140981,text:"原平市"},{value:140982,text:"其它区"}]},{value:141e3,text:"临汾市",children:[{value:141002,text:"尧都区"},{value:141021,text:"曲沃县"},{value:141022,text:"翼城县"},{value:141023,text:"襄汾县"},{value:141024,text:"洪洞县"},{value:141025,text:"古县"},{value:141026,text:"安泽县"},{value:141027,text:"浮山县"},{value:141028,text:"吉县"},{value:141029,text:"乡宁县"},{value:141030,text:"大宁县"},{value:141031,text:"隰县"},{value:141032,text:"永和县"},{value:141033,text:"蒲县"},{value:141034,text:"汾西县"},{value:141081,text:"侯马市"},{value:141082,text:"霍州市"},{value:141083,text:"其它区"}]},{value:141100,text:"吕梁市",children:[{value:141102,text:"离石区"},{value:141121,text:"文水县"},{value:141122,text:"交城县"},{value:141123,text:"兴县"},{value:141124,text:"临县"},{value:141125,text:"柳林县"},{value:141126,text:"石楼县"},{value:141127,text:"岚县"},{value:141128,text:"方山县"},{value:141129,text:"中阳县"},{value:141130,text:"交口县"},{value:141181,text:"孝义市"},{value:141182,text:"汾阳市"},{value:141183,text:"其它区"}]}]},{value:15e4,text:"内蒙古",children:[{value:150100,text:"呼和浩特市",children:[{value:150102,text:"新城区"},{value:150103,text:"回民区"},{value:150104,text:"玉泉区"},{value:150105,text:"赛罕区"},{value:150121,text:"土默特左旗"},{value:150122,text:"托克托县"},{value:150123,text:"和林格尔县"},{value:150124,text:"清水河县"},{value:150125,text:"武川县"},{value:150126,text:"其它区"}]},{value:150200,text:"包头市",children:[{value:150202,text:"东河区"},{value:150203,text:"昆都仑区"},{value:150204,text:"青山区"},{value:150205,text:"石拐区"},{value:150206,text:"白云鄂博矿区"},{value:150207,text:"九原区"},{value:150221,text:"土默特右旗"},{value:150222,text:"固阳县"},{value:150223,text:"达尔罕茂明安联合旗"},{value:150224,text:"其它区"}]},{value:150300,text:"乌海市",children:[{value:150302,text:"海勃湾区"},{value:150303,text:"海南区"},{value:150304,text:"乌达区"},{value:150305,text:"其它区"}]},{value:150400,text:"赤峰市",children:[{value:150402,text:"红山区"},{value:150403,text:"元宝山区"},{value:150404,text:"松山区"},{value:150421,text:"阿鲁科尔沁旗"},{value:150422,text:"巴林左旗"},{value:150423,text:"巴林右旗"},{value:150424,text:"林西县"},{value:150425,text:"克什克腾旗"},{value:150426,text:"翁牛特旗"},{value:150428,text:"喀喇沁旗"},{value:150429,text:"宁城县"},{value:150430,text:"敖汉旗"},{value:150431,text:"其它区"}]},{value:150500,text:"通辽市",children:[{value:150502,text:"科尔沁区"},{value:150521,text:"科尔沁左翼中旗"},{value:150522,text:"科尔沁左翼后旗"},{value:150523,text:"开鲁县"},{value:150524,text:"库伦旗"},{value:150525,text:"奈曼旗"},{value:150526,text:"扎鲁特旗"},{value:150581,text:"霍林郭勒市"},{value:150582,text:"其它区"}]},{value:150600,text:"鄂尔多斯市",children:[{value:150602,text:"东胜区"},{value:150621,text:"达拉特旗"},{value:150622,text:"准格尔旗"},{value:150623,text:"鄂托克前旗"},{value:150624,text:"鄂托克旗"},{value:150625,text:"杭锦旗"},{value:150626,text:"乌审旗"},{value:150627,text:"伊金霍洛旗"},{value:150628,text:"其它区"}]},{value:150700,text:"呼伦贝尔市",children:[{value:150702,text:"海拉尔区"},{value:150703,text:"扎赉诺尔区"},{value:150721,text:"阿荣旗"},{value:150722,text:"莫力达瓦达斡尔族自治旗"},{value:150723,text:"鄂伦春自治旗"},{value:150724,text:"鄂温克族自治旗"},{value:150725,text:"陈巴尔虎旗"},{value:150726,text:"新巴尔虎左旗"},{value:150727,text:"新巴尔虎右旗"},{value:150781,text:"满洲里市"},{value:150782,text:"牙克石市"},{value:150783,text:"扎兰屯市"},{value:150784,text:"额尔古纳市"},{value:150785,text:"根河市"},{value:150786,text:"其它区"}]},{value:150800,text:"巴彦淖尔市",children:[{value:150802,text:"临河区"},{value:150821,text:"五原县"},{value:150822,text:"磴口县"},{value:150823,text:"乌拉特前旗"},{value:150824,text:"乌拉特中旗"},{value:150825,text:"乌拉特后旗"},{value:150826,text:"杭锦后旗"},{value:150827,text:"其它区"}]},{value:150900,text:"乌兰察布市",children:[{value:150902,text:"集宁区"},{value:150921,text:"卓资县"},{value:150922,text:"化德县"},{value:150923,text:"商都县"},{value:150924,text:"兴和县"},{value:150925,text:"凉城县"},{value:150926,text:"察哈尔右翼前旗"},{value:150927,text:"察哈尔右翼中旗"},{value:150928,text:"察哈尔右翼后旗"},{value:150929,text:"四子王旗"},{value:150981,text:"丰镇市"},{value:150982,text:"其它区"}]},{value:152200,text:"兴安盟",children:[{value:152201,text:"乌兰浩特市"},{value:152202,text:"阿尔山市"},{value:152221,text:"科尔沁右翼前旗"},{value:152222,text:"科尔沁右翼中旗"},{value:152223,text:"扎赉特旗"},{value:152224,text:"突泉县"},{value:152225,text:"其它区"}]},{value:152500,text:"锡林郭勒盟",children:[{value:152501,text:"二连浩特市"},{value:152502,text:"锡林浩特市"},{value:152522,text:"阿巴嘎旗"},{value:152523,text:"苏尼特左旗"},{value:152524,text:"苏尼特右旗"},{value:152525,text:"东乌珠穆沁旗"},{value:152526,text:"西乌珠穆沁旗"},{value:152527,text:"太仆寺旗"},{value:152528,text:"镶黄旗"},{value:152529,text:"正镶白旗"},{value:152530,text:"正蓝旗"},{value:152531,text:"多伦县"},{value:152532,text:"其它区"}]},{value:152900,text:"阿拉善盟",children:[{value:152921,text:"阿拉善左旗"},{value:152922,text:"阿拉善右旗"},{value:152923,text:"额济纳旗"},{value:152924,text:"其它区"}]}]},{value:21e4,text:"辽宁",children:[{value:210100,text:"沈阳市",children:[{value:210102,text:"和平区"},{value:210103,text:"沈河区"},{value:210104,text:"大东区"},{value:210105,text:"皇姑区"},{value:210106,text:"铁西区"},{value:210111,text:"苏家屯区"},{value:210112,text:"浑南区"},{value:210113,text:"新城子区"},{value:210114,text:"于洪区"},{value:210122,text:"辽中县"},{value:210123,text:"康平县"},{value:210124,text:"法库县"},{value:210181,text:"新民市"},{value:210182,text:"浑南新区"},{value:210183,text:"张士开发区"},{value:210184,text:"沈北新区"},{value:210185,text:"其它区"}]},{value:210200,text:"大连市",children:[{value:210202,text:"中山区"},{value:210203,text:"西岗区"},{value:210204,text:"沙河口区"},{value:210211,text:"甘井子区"},{value:210212,text:"旅顺口区"},{value:210213,text:"金州区"},{value:210224,text:"长海县"},{value:210251,text:"开发区"},{value:210281,text:"瓦房店市"},{value:210282,text:"普兰店市"},{value:210283,text:"庄河市"},{value:210297,text:"岭前区"},{value:210298,text:"其它区"}]},{value:210300,text:"鞍山市",children:[{value:210302,text:"铁东区"},{value:210303,text:"铁西区"},{value:210304,text:"立山区"},{value:210311,text:"千山区"},{value:210321,text:"台安县"},{value:210323,text:"岫岩满族自治县"},{value:210351,text:"高新区"},{value:210381,text:"海城市"},{value:210382,text:"其它区"}]},{value:210400,text:"抚顺市",children:[{value:210402,text:"新抚区"},{value:210403,text:"东洲区"},{value:210404,text:"望花区"},{value:210411,text:"顺城区"},{value:210421,text:"抚顺县"},{value:210422,text:"新宾满族自治县"},{value:210423,text:"清原满族自治县"},{value:210424,text:"其它区"}]},{value:210500,text:"本溪市",children:[{value:210502,text:"平山区"},{value:210503,text:"溪湖区"},{value:210504,text:"明山区"},{value:210505,text:"南芬区"},{value:210521,text:"本溪满族自治县"},{value:210522,text:"桓仁满族自治县"},{value:210523,text:"其它区"}]},{value:210600,text:"丹东市",children:[{value:210602,text:"元宝区"},{value:210603,text:"振兴区"},{value:210604,text:"振安区"},{value:210624,text:"宽甸满族自治县"},{value:210681,text:"东港市"},{value:210682,text:"凤城市"},{value:210683,text:"其它区"}]},{value:210700,text:"锦州市",children:[{value:210702,text:"古塔区"},{value:210703,text:"凌河区"},{value:210711,text:"太和区"},{value:210726,text:"黑山县"},{value:210727,text:"义县"},{value:210781,text:"凌海市"},{value:210782,text:"北镇市"},{value:210783,text:"其它区"}]},{value:210800,text:"营口市",children:[{value:210802,text:"站前区"},{value:210803,text:"西市区"},{value:210804,text:"鲅鱼圈区"},{value:210811,text:"老边区"},{value:210881,text:"盖州市"},{value:210882,text:"大石桥市"},{value:210883,text:"其它区"}]},{value:210900,text:"阜新市",children:[{value:210902,text:"海州区"},{value:210903,text:"新邱区"},{value:210904,text:"太平区"},{value:210905,text:"清河门区"},{value:210911,text:"细河区"},{value:210921,text:"阜新蒙古族自治县"},{value:210922,text:"彰武县"},{value:210923,text:"其它区"}]},{value:211e3,text:"辽阳市",children:[{value:211002,text:"白塔区"},{value:211003,text:"文圣区"},{value:211004,text:"宏伟区"},{value:211005,text:"弓长岭区"},{value:211011,text:"太子河区"},{value:211021,text:"辽阳县"},{value:211081,text:"灯塔市"},{value:211082,text:"其它区"}]},{value:211100,text:"盘锦市",children:[{value:211102,text:"双台子区"},{value:211103,text:"兴隆台区"},{value:211121,text:"大洼县"},{value:211122,text:"盘山县"},{value:211123,text:"其它区"}]},{value:211200,text:"铁岭市",children:[{value:211202,text:"银州区"},{value:211204,text:"清河区"},{value:211221,text:"铁岭县"},{value:211223,text:"西丰县"},{value:211224,text:"昌图县"},{value:211281,text:"调兵山市"},{value:211282,text:"开原市"},{value:211283,text:"其它区"}]},{value:211300,text:"朝阳市",children:[{value:211302,text:"双塔区"},{value:211303,text:"龙城区"},{value:211321,text:"朝阳县"},{value:211322,text:"建平县"},{value:211324,text:"喀喇沁左翼蒙古族自治县"},{value:211381,text:"北票市"},{value:211382,text:"凌源市"},{value:211383,text:"其它区"}]},{value:211400,text:"葫芦岛市",children:[{value:211402,text:"连山区"},{value:211403,text:"龙港区"},{value:211404,text:"南票区"},{value:211421,text:"绥中县"},{value:211422,text:"建昌县"},{value:211481,text:"兴城市"},{value:211482,text:"其它区"}]}]},{value:22e4,text:"吉林",children:[{value:220100,text:"长春市",children:[{value:220102,text:"南关区"},{value:220103,text:"宽城区"},{value:220104,text:"朝阳区"},{value:220105,text:"二道区"},{value:220106,text:"绿园区"},{value:220112,text:"双阳区"},{value:220122,text:"农安县"},{value:220181,text:"九台区"},{value:220182,text:"榆树市"},{value:220183,text:"德惠市"},{value:220184,text:"高新技术产业开发区"},{value:220185,text:"汽车产业开发区"},{value:220186,text:"经济技术开发区"},{value:220187,text:"净月旅游开发区"},{value:220188,text:"其它区"}]},{value:220200,text:"吉林市",children:[{value:220202,text:"昌邑区"},{value:220203,text:"龙潭区"},{value:220204,text:"船营区"},{value:220211,text:"丰满区"},{value:220221,text:"永吉县"},{value:220281,text:"蛟河市"},{value:220282,text:"桦甸市"},{value:220283,text:"舒兰市"},{value:220284,text:"磐石市"},{value:220285,text:"其它区"}]},{value:220300,text:"四平市",children:[{value:220302,text:"铁西区"},{value:220303,text:"铁东区"},{value:220322,text:"梨树县"},{value:220323,text:"伊通满族自治县"},{value:220381,text:"公主岭市"},{value:220382,text:"双辽市"},{value:220383,text:"其它区"}]},{value:220400,text:"辽源市",children:[{value:220402,text:"龙山区"},{value:220403,text:"西安区"},{value:220421,text:"东丰县"},{value:220422,text:"东辽县"},{value:220423,text:"其它区"}]},{value:220500,text:"通化市",children:[{value:220502,text:"东昌区"},{value:220503,text:"二道江区"},{value:220521,text:"通化县"},{value:220523,text:"辉南县"},{value:220524,text:"柳河县"},{value:220581,text:"梅河口市"},{value:220582,text:"集安市"},{value:220583,text:"其它区"}]},{value:220600,text:"白山市",children:[{value:220602,text:"浑江区"},{value:220621,text:"抚松县"},{value:220622,text:"靖宇县"},{value:220623,text:"长白朝鲜族自治县"},{value:220625,text:"江源区"},{value:220681,text:"临江市"},{value:220682,text:"其它区"}]},{value:220700,text:"松原市",children:[{value:220702,text:"宁江区"},{value:220721,text:"前郭尔罗斯蒙古族自治县"},{value:220722,text:"长岭县"},{value:220723,text:"乾安县"},{value:220724,text:"扶余市"},{value:220725,text:"其它区"}]},{value:220800,text:"白城市",children:[{value:220802,text:"洮北区"},{value:220821,text:"镇赉县"},{value:220822,text:"通榆县"},{value:220881,text:"洮南市"},{value:220882,text:"大安市"},{value:220883,text:"其它区"}]},{value:222400,text:"延边朝鲜族自治州",children:[{value:222401,text:"延吉市"},{value:222402,text:"图们市"},{value:222403,text:"敦化市"},{value:222404,text:"珲春市"},{value:222405,text:"龙井市"},{value:222406,text:"和龙市"},{value:222424,text:"汪清县"},{value:222426,text:"安图县"},{value:222427,text:"其它区"}]}]},{value:23e4,text:"黑龙江",children:[{value:230100,text:"哈尔滨市",children:[{value:230102,text:"道里区"},{value:230103,text:"南岗区"},{value:230104,text:"道外区"},{value:230106,text:"香坊区"},{value:230107,text:"动力区"},{value:230108,text:"平房区"},{value:230109,text:"松北区"},{value:230111,text:"呼兰区"},{value:230123,text:"依兰县"},{value:230124,text:"方正县"},{value:230125,text:"宾县"},{value:230126,text:"巴彦县"},{value:230127,text:"木兰县"},{value:230128,text:"通河县"},{value:230129,text:"延寿县"},{value:230181,text:"阿城区"},{value:230182,text:"双城区"},{value:230183,text:"尚志市"},{value:230184,text:"五常市"},{value:230185,text:"阿城市"},{value:230186,text:"其它区"}]},{value:230200,text:"齐齐哈尔市",children:[{value:230202,text:"龙沙区"},{value:230203,text:"建华区"},{value:230204,text:"铁锋区"},{value:230205,text:"昂昂溪区"},{value:230206,text:"富拉尔基区"},{value:230207,text:"碾子山区"},{value:230208,text:"梅里斯达斡尔族区"},{value:230221,text:"龙江县"},{value:230223,text:"依安县"},{value:230224,text:"泰来县"},{value:230225,text:"甘南县"},{value:230227,text:"富裕县"},{value:230229,text:"克山县"},{value:230230,text:"克东县"},{value:230231,text:"拜泉县"},{value:230281,text:"讷河市"},{value:230282,text:"其它区"}]},{value:230300,text:"鸡西市",children:[{value:230302,text:"鸡冠区"},{value:230303,text:"恒山区"},{value:230304,text:"滴道区"},{value:230305,text:"梨树区"},{value:230306,text:"城子河区"},{value:230307,text:"麻山区"},{value:230321,text:"鸡东县"},{value:230381,text:"虎林市"},{value:230382,text:"密山市"},{value:230383,text:"其它区"}]},{value:230400,text:"鹤岗市",children:[{value:230402,text:"向阳区"},{value:230403,text:"工农区"},{value:230404,text:"南山区"},{value:230405,text:"兴安区"},{value:230406,text:"东山区"},{value:230407,text:"兴山区"},{value:230421,text:"萝北县"},{value:230422,text:"绥滨县"},{value:230423,text:"其它区"}]},{value:230500,text:"双鸭山市",children:[{value:230502,text:"尖山区"},{value:230503,text:"岭东区"},{value:230505,text:"四方台区"},{value:230506,text:"宝山区"},{value:230521,text:"集贤县"},{value:230522,text:"友谊县"},{value:230523,text:"宝清县"},{value:230524,text:"饶河县"},{value:230525,text:"其它区"}]},{value:230600,text:"大庆市",children:[{value:230602,text:"萨尔图区"},{value:230603,text:"龙凤区"},{value:230604,text:"让胡路区"},{value:230605,text:"红岗区"},{value:230606,text:"大同区"},{value:230621,text:"肇州县"},{value:230622,text:"肇源县"},{value:230623,text:"林甸县"},{value:230624,text:"杜尔伯特蒙古族自治县"},{value:230625,text:"其它区"}]},{value:230700,text:"伊春市",children:[{value:230702,text:"伊春区"},{value:230703,text:"南岔区"},{value:230704,text:"友好区"},{value:230705,text:"西林区"},{value:230706,text:"翠峦区"},{value:230707,text:"新青区"},{value:230708,text:"美溪区"},{value:230709,text:"金山屯区"},{value:230710,text:"五营区"},{value:230711,text:"乌马河区"},{value:230712,text:"汤旺河区"},{value:230713,text:"带岭区"},{value:230714,text:"乌伊岭区"},{value:230715,text:"红星区"},{value:230716,text:"上甘岭区"},{value:230722,text:"嘉荫县"},{value:230781,text:"铁力市"},{value:230782,text:"其它区"}]},{value:230800,text:"佳木斯市",children:[{value:230802,text:"永红区"},{value:230803,text:"向阳区"},{value:230804,text:"前进区"},{value:230805,text:"东风区"},{value:230811,text:"郊区"},{value:230822,text:"桦南县"},{value:230826,text:"桦川县"},{value:230828,text:"汤原县"},{value:230833,text:"抚远县"},{value:230881,text:"同江市"},{value:230882,text:"富锦市"},{value:230883,text:"其它区"}]},{value:230900,text:"七台河市",children:[{value:230902,text:"新兴区"},{value:230903,text:"桃山区"},{value:230904,text:"茄子河区"},{value:230921,text:"勃利县"},{value:230922,text:"其它区"}]},{value:231e3,text:"牡丹江市",children:[{value:231002,text:"东安区"},{value:231003,text:"阳明区"},{value:231004,text:"爱民区"},{value:231005,text:"西安区"},{value:231024,text:"东宁县"},{value:231025,text:"林口县"},{value:231081,text:"绥芬河市"},{value:231083,text:"海林市"},{value:231084,text:"宁安市"},{value:231085,text:"穆棱市"},{value:231086,text:"其它区"}]},{value:231100,text:"黑河市",children:[{value:231102,text:"爱辉区"},{value:231121,text:"嫩江县"},{value:231123,text:"逊克县"},{value:231124,text:"孙吴县"},{value:231181,text:"北安市"},{value:231182,text:"五大连池市"},{value:231183,text:"其它区"}]},{value:231200,text:"绥化市",children:[{value:231202,text:"北林区"},{value:231221,text:"望奎县"},{value:231222,text:"兰西县"},{value:231223,text:"青冈县"},{value:231224,text:"庆安县"},{value:231225,text:"明水县"},{value:231226,text:"绥棱县"},{value:231281,text:"安达市"},{value:231282,text:"肇东市"},{value:231283,text:"海伦市"},{value:231284,text:"其它区"}]},{value:232700,text:"大兴安岭地区",children:[{value:232702,text:"松岭区"},{value:232703,text:"新林区"},{value:232704,text:"呼中区"},{value:232721,text:"呼玛县"},{value:232722,text:"塔河县"},{value:232723,text:"漠河县"},{value:232724,text:"加格达奇区"},{value:232725,text:"其它区"}]}]},{value:31e4,text:"上海",children:[{value:310100,text:"上海市",children:[{value:310101,text:"黄浦区"},{value:310103,text:"卢湾区"},{value:310104,text:"徐汇区"},{value:310105,text:"长宁区"},{value:310106,text:"静安区"},{value:310107,text:"普陀区"},{value:310108,text:"闸北区"},{value:310109,text:"虹口区"},{value:310110,text:"杨浦区"},{value:310112,text:"闵行区"},{value:310113,text:"宝山区"},{value:310114,text:"嘉定区"},{value:310115,text:"浦东新区"},{value:310116,text:"金山区"},{value:310117,text:"松江区"},{value:310118,text:"青浦区"},{value:310119,text:"南汇区"},{value:310120,text:"奉贤区"},{value:310152,text:"川沙区"},{value:310230,text:"崇明县"},{value:310231,text:"其它区"}]}]},{value:32e4,text:"江苏",children:[{value:320100,text:"南京市",children:[{value:320102,text:"玄武区"},{value:320103,text:"白下区"},{value:320104,text:"秦淮区"},{value:320105,text:"建邺区"},{value:320106,text:"鼓楼区"},{value:320107,text:"下关区"},{value:320111,text:"浦口区"},{value:320113,text:"栖霞区"},{value:320114,text:"雨花台区"},{value:320115,text:"江宁区"},{value:320116,text:"六合区"},{value:320124,text:"溧水区"},{value:320125,text:"高淳区"},{value:320126,text:"其它区"}]},{value:320200,text:"无锡市",children:[{value:320202,text:"崇安区"},{value:320203,text:"南长区"},{value:320204,text:"北塘区"},{value:320205,text:"锡山区"},{value:320206,text:"惠山区"},{value:320211,text:"滨湖区"},{value:320281,text:"江阴市"},{value:320282,text:"宜兴市"},{value:320296,text:"新区"},{value:320297,text:"其它区"}]},{value:320300,text:"徐州市",children:[{value:320302,text:"鼓楼区"},{value:320303,text:"云龙区"},{value:320304,text:"九里区"},{value:320305,text:"贾汪区"},{value:320311,text:"泉山区"},{value:320321,text:"丰县"},{value:320322,text:"沛县"},{value:320323,text:"铜山区"},{value:320324,text:"睢宁县"},{value:320381,text:"新沂市"},{value:320382,text:"邳州市"},{value:320383,text:"其它区"}]},{value:320400,text:"常州市",children:[{value:320402,text:"天宁区"},{value:320404,text:"钟楼区"},{value:320405,text:"戚墅堰区"},{value:320411,text:"新北区"},{value:320412,text:"武进区"},{value:320481,text:"溧阳市"},{value:320482,text:"金坛市"},{value:320483,text:"其它区"}]},{value:320500,text:"苏州市",children:[{value:320502,text:"沧浪区"},{value:320503,text:"平江区"},{value:320504,text:"金阊区"},{value:320505,text:"虎丘区"},{value:320506,text:"吴中区"},{value:320507,text:"相城区"},{value:320508,text:"姑苏区"},{value:320581,text:"常熟市"},{value:320582,text:"张家港市"},{value:320583,text:"昆山市"},{value:320584,text:"吴江区"},{value:320585,text:"太仓市"},{value:320594,text:"新区"},{value:320595,text:"园区"},{value:320596,text:"其它区"}]},{value:320600,text:"南通市",children:[{value:320602,text:"崇川区"},{value:320611,text:"港闸区"},{value:320612,text:"通州区"},{value:320621,text:"海安县"},{value:320623,text:"如东县"},{value:320681,text:"启东市"},{value:320682,text:"如皋市"},{value:320683,text:"通州市"},{value:320684,text:"海门市"},{value:320693,text:"开发区"},{value:320694,text:"其它区"}]},{value:320700,text:"连云港市",children:[{value:320703,text:"连云区"},{value:320705,text:"新浦区"},{value:320706,text:"海州区"},{value:320721,text:"赣榆区"},{value:320722,text:"东海县"},{value:320723,text:"灌云县"},{value:320724,text:"灌南县"},{value:320725,text:"其它区"}]},{value:320800,text:"淮安市",children:[{value:320802,text:"清河区"},{value:320803,text:"淮安区"},{value:320804,text:"淮阴区"},{value:320811,text:"清浦区"},{value:320826,text:"涟水县"},{value:320829,text:"洪泽县"},{value:320830,text:"盱眙县"},{value:320831,text:"金湖县"},{value:320832,text:"其它区"}]},{value:320900,text:"盐城市",children:[{value:320902,text:"亭湖区"},{value:320903,text:"盐都区"},{value:320921,text:"响水县"},{value:320922,text:"滨海县"},{value:320923,text:"阜宁县"},{value:320924,text:"射阳县"},{value:320925,text:"建湖县"},{value:320981,text:"东台市"},{value:320982,text:"大丰市"},{value:320983,text:"其它区"}]},{value:321e3,text:"扬州市",children:[{value:321002,text:"广陵区"},{value:321003,text:"邗江区"},{value:321011,text:"维扬区"},{value:321023,text:"宝应县"},{value:321081,text:"仪征市"},{value:321084,text:"高邮市"},{value:321088,text:"江都区"},{value:321092,text:"经济开发区"},{value:321093,text:"其它区"}]},{value:321100,text:"镇江市",children:[{value:321102,text:"京口区"},{value:321111,text:"润州区"},{value:321112,text:"丹徒区"},{value:321181,text:"丹阳市"},{value:321182,text:"扬中市"},{value:321183,text:"句容市"},{value:321184,text:"其它区"}]},{value:321200,text:"泰州市",children:[{value:321202,text:"海陵区"},{value:321203,text:"高港区"},{value:321281,text:"兴化市"},{value:321282,text:"靖江市"},{value:321283,text:"泰兴市"},{value:321284,text:"姜堰区"},{value:321285,text:"其它区"}]},{value:321300,text:"宿迁市",children:[{value:321302,text:"宿城区"},{value:321311,text:"宿豫区"},{value:321322,text:"沭阳县"},{value:321323,text:"泗阳县"},{value:321324,text:"泗洪县"},{value:321325,text:"其它区"}]}]},{value:33e4,text:"浙江",children:[{value:330100,text:"杭州市",children:[{value:330102,text:"上城区"},{value:330103,text:"下城区"},{value:330104,text:"江干区"},{value:330105,text:"拱墅区"},{value:330106,text:"西湖区"},{value:330108,text:"滨江区"},{value:330109,text:"萧山区"},{value:330110,text:"余杭区"},{value:330122,text:"桐庐县"},{value:330127,text:"淳安县"},{value:330182,text:"建德市"},{value:330183,text:"富阳区"},{value:330185,text:"临安市"},{value:330186,text:"其它区"}]},{value:330200,text:"宁波市",children:[{value:330203,text:"海曙区"},{value:330204,text:"江东区"},{value:330205,text:"江北区"},{value:330206,text:"北仑区"},{value:330211,text:"镇海区"},{value:330212,text:"鄞州区"},{value:330225,text:"象山县"},{value:330226,text:"宁海县"},{value:330281,text:"余姚市"},{value:330282,text:"慈溪市"},{value:330283,text:"奉化市"},{value:330284,text:"其它区"}]},{value:330300,text:"温州市",children:[{value:330302,text:"鹿城区"},{value:330303,text:"龙湾区"},{value:330304,text:"瓯海区"},{value:330322,text:"洞头县"},{value:330324,text:"永嘉县"},{value:330326,text:"平阳县"},{value:330327,text:"苍南县"},{value:330328,text:"文成县"},{value:330329,text:"泰顺县"},{value:330381,text:"瑞安市"},{value:330382,text:"乐清市"},{value:330383,text:"其它区"}]},{value:330400,text:"嘉兴市",children:[{value:330402,text:"南湖区"},{value:330411,text:"秀洲区"},{value:330421,text:"嘉善县"},{value:330424,text:"海盐县"},{value:330481,text:"海宁市"},{value:330482,text:"平湖市"},{value:330483,text:"桐乡市"},{value:330484,text:"其它区"}]},{value:330500,text:"湖州市",children:[{value:330502,text:"吴兴区"},{value:330503,text:"南浔区"},{value:330521,text:"德清县"},{value:330522,text:"长兴县"},{value:330523,text:"安吉县"},{value:330524,text:"其它区"}]},{value:330600,text:"绍兴市",children:[{value:330602,text:"越城区"},{value:330621,text:"柯桥区"},{value:330624,text:"新昌县"},{value:330681,text:"诸暨市"},{value:330682,text:"上虞区"},{value:330683,text:"嵊州市"},{value:330684,text:"其它区"}]},{value:330700,text:"金华市",children:[{value:330702,text:"婺城区"},{value:330703,text:"金东区"},{value:330723,text:"武义县"},{value:330726,text:"浦江县"},{value:330727,text:"磐安县"},{value:330781,text:"兰溪市"},{value:330782,text:"义乌市"},{value:330783,text:"东阳市"},{value:330784,text:"永康市"},{value:330785,text:"其它区"}]},{value:330800,text:"衢州市",children:[{value:330802,text:"柯城区"},{value:330803,text:"衢江区"},{value:330822,text:"常山县"},{value:330824,text:"开化县"},{value:330825,text:"龙游县"},{value:330881,text:"江山市"},{value:330882,text:"其它区"}]},{value:330900,text:"舟山市",children:[{value:330902,text:"定海区"},{value:330903,text:"普陀区"},{value:330921,text:"岱山县"},{value:330922,text:"嵊泗县"},{value:330923,text:"其它区"}]},{value:331e3,text:"台州市",children:[{value:331002,text:"椒江区"},{value:331003,text:"黄岩区"},{value:331004,text:"路桥区"},{value:331021,text:"玉环县"},{value:331022,text:"三门县"},{value:331023,text:"天台县"},{value:331024,text:"仙居县"},{value:331081,text:"温岭市"},{value:331082,text:"临海市"},{value:331083,text:"其它区"}]},{value:331100,text:"丽水市",children:[{value:331102,text:"莲都区"},{value:331121,text:"青田县"},{value:331122,text:"缙云县"},{value:331123,text:"遂昌县"},{value:331124,text:"松阳县"},{value:331125,text:"云和县"},{value:331126,text:"庆元县"},{value:331127,text:"景宁畲族自治县"},{value:331181,text:"龙泉市"},{value:331182,text:"其它区"}]}]},{value:34e4,text:"安徽",children:[{value:340100,text:"合肥市",children:[{value:340102,text:"瑶海区"},{value:340103,text:"庐阳区"},{value:340104,text:"蜀山区"},{value:340111,text:"包河区"},{value:340121,text:"长丰县"},{value:340122,text:"肥东县"},{value:340123,text:"肥西县"},{value:340151,text:"高新区"},{value:340191,text:"中区"},{value:340192,text:"其它区"},{value:341400,text:"巢湖市"},{value:341402,text:"居巢区"},{value:341421,text:"庐江县"}]},{value:340200,text:"芜湖市",children:[{value:340202,text:"镜湖区"},{value:340203,text:"弋江区"},{value:340207,text:"鸠江区"},{value:340208,text:"三山区"},{value:340221,text:"芜湖县"},{value:340222,text:"繁昌县"},{value:340223,text:"南陵县"},{value:340224,text:"其它区"},{value:341422,text:"无为县"}]},{value:340300,text:"蚌埠市",children:[{value:340302,text:"龙子湖区"},{value:340303,text:"蚌山区"},{value:340304,text:"禹会区"},{value:340311,text:"淮上区"},{value:340321,text:"怀远县"},{value:340322,text:"五河县"},{value:340323,text:"固镇县"},{value:340324,text:"其它区"}]},{value:340400,text:"淮南市",children:[{value:340402,text:"大通区"},{value:340403,text:"田家庵区"},{value:340404,text:"谢家集区"},{value:340405,text:"八公山区"},{value:340406,text:"潘集区"},{value:340421,text:"凤台县"},{value:340422,text:"其它区"}]},{value:340500,text:"马鞍山市",children:[{value:340502,text:"金家庄区"},{value:340503,text:"花山区"},{value:340504,text:"雨山区"},{value:340506,text:"博望区"},{value:340521,text:"当涂县"},{value:340522,text:"其它区"},{value:341423,text:"含山县"},{value:341424,text:"和县"}]},{value:340600,text:"淮北市",children:[{value:340602,text:"杜集区"},{value:340603,text:"相山区"},{value:340604,text:"烈山区"},{value:340621,text:"濉溪县"},{value:340622,text:"其它区"}]},{value:340700,text:"铜陵市",children:[{value:340702,text:"铜官山区"},{value:340703,text:"狮子山区"},{value:340711,text:"郊区"},{value:340721,text:"铜陵县"},{value:340722,text:"其它区"}]},{value:340800,text:"安庆市",children:[{value:340802,text:"迎江区"},{value:340803,text:"大观区"},{value:340811,text:"宜秀区"},{value:340822,text:"怀宁县"},{value:340823,text:"枞阳县"},{value:340824,text:"潜山县"},{value:340825,text:"太湖县"},{value:340826,text:"宿松县"},{value:340827,text:"望江县"},{value:340828,text:"岳西县"},{value:340881,text:"桐城市"},{value:340882,text:"其它区"}]},{value:341e3,text:"黄山市",children:[{value:341002,text:"屯溪区"},{value:341003,text:"黄山区"},{value:341004,text:"徽州区"},{value:341021,text:"歙县"},{value:341022,text:"休宁县"},{value:341023,text:"黟县"},{value:341024,text:"祁门县"},{value:341025,text:"其它区"}]},{value:341100,text:"滁州市",children:[{value:341102,text:"琅琊区"},{value:341103,text:"南谯区"},{value:341122,text:"来安县"},{value:341124,text:"全椒县"},{value:341125,text:"定远县"},{value:341126,text:"凤阳县"},{value:341181,text:"天长市"},{value:341182,text:"明光市"},{value:341183,text:"其它区"}]},{value:341200,text:"阜阳市",children:[{value:341202,text:"颍州区"},{value:341203,text:"颍东区"},{value:341204,text:"颍泉区"},{value:341221,text:"临泉县"},{value:341222,text:"太和县"},{value:341225,text:"阜南县"},{value:341226,text:"颍上县"},{value:341282,text:"界首市"},{value:341283,text:"其它区"}]},{value:341300,text:"宿州市",children:[{value:341302,text:"埇桥区"},{value:341321,text:"砀山县"},{value:341322,text:"萧县"},{value:341323,text:"灵璧县"},{value:341324,text:"泗县"},{value:341325,text:"其它区"}]},{value:341500,text:"六安市",children:[{value:341502,text:"金安区"},{value:341503,text:"裕安区"},{value:341521,text:"寿县"},{value:341522,text:"霍邱县"},{value:341523,text:"舒城县"},{value:341524,text:"金寨县"},{value:341525,text:"霍山县"},{value:341526,text:"其它区"}]},{value:341600,text:"亳州市",children:[{value:341602,text:"谯城区"},{value:341621,text:"涡阳县"},{value:341622,text:"蒙城县"},{value:341623,text:"利辛县"},{value:341624,text:"其它区"}]},{value:341700,text:"池州市",children:[{value:341702,text:"贵池区"},{value:341721,text:"东至县"},{value:341722,text:"石台县"},{value:341723,text:"青阳县"},{value:341724,text:"其它区"}]},{value:341800,text:"宣城市",children:[{value:341802,text:"宣州区"},{value:341821,text:"郎溪县"},{value:341822,text:"广德县"},{value:341823,text:"泾县"},{value:341824,text:"绩溪县"},{value:341825,text:"旌德县"},{value:341881,text:"宁国市"},{value:341882,text:"其它区"}]}]},{value:35e4,text:"福建",children:[{value:350100,text:"福州市",children:[{value:350102,text:"鼓楼区"},{value:350103,text:"台江区"},{value:350104,text:"仓山区"},{value:350105,text:"马尾区"},{value:350111,text:"晋安区"},{value:350121,text:"闽侯县"},{value:350122,text:"连江县"},{value:350123,text:"罗源县"},{value:350124,text:"闽清县"},{value:350125,text:"永泰县"},{value:350128,text:"平潭县"},{value:350181,text:"福清市"},{value:350182,text:"长乐市"},{value:350183,text:"其它区"}]},{value:350200,text:"厦门市",children:[{value:350203,text:"思明区"},{value:350205,text:"海沧区"},{value:350206,text:"湖里区"},{value:350211,text:"集美区"},{value:350212,text:"同安区"},{value:350213,text:"翔安区"},{value:350214,text:"其它区"}]},{value:350300,text:"莆田市",children:[{value:350302,text:"城厢区"},{value:350303,text:"涵江区"},{value:350304,text:"荔城区"},{value:350305,text:"秀屿区"},{value:350322,text:"仙游县"},{value:350323,text:"其它区"}]},{value:350400,text:"三明市",children:[{value:350402,text:"梅列区"},{value:350403,text:"三元区"},{value:350421,text:"明溪县"},{value:350423,text:"清流县"},{value:350424,text:"宁化县"},{value:350425,text:"大田县"},{value:350426,text:"尤溪县"},{value:350427,text:"沙县"},{value:350428,text:"将乐县"},{value:350429,text:"泰宁县"},{value:350430,text:"建宁县"},{value:350481,text:"永安市"},{value:350482,text:"其它区"}]},{value:350500,text:"泉州市",children:[{value:350502,text:"鲤城区"},{value:350503,text:"丰泽区"},{value:350504,text:"洛江区"},{value:350505,text:"泉港区"},{value:350521,text:"惠安县"},{value:350524,text:"安溪县"},{value:350525,text:"永春县"},{value:350526,text:"德化县"},{value:350527,text:"金门县"},{value:350581,text:"石狮市"},{value:350582,text:"晋江市"},{value:350583,text:"南安市"},{value:350584,text:"其它区"}]},{value:350600,text:"漳州市",children:[{value:350602,text:"芗城区"},{value:350603,text:"龙文区"},{value:350622,text:"云霄县"},{value:350623,text:"漳浦县"},{value:350624,text:"诏安县"},{value:350625,text:"长泰县"},{value:350626,text:"东山县"},{value:350627,text:"南靖县"},{value:350628,text:"平和县"},{value:350629,text:"华安县"},{value:350681,text:"龙海市"},{value:350682,text:"其它区"}]},{value:350700,text:"南平市",children:[{value:350702,text:"延平区"},{value:350721,text:"顺昌县"},{value:350722,text:"浦城县"},{value:350723,text:"光泽县"},{value:350724,text:"松溪县"},{value:350725,text:"政和县"},{value:350781,text:"邵武市"},{value:350782,text:"武夷山市"},{value:350783,text:"建瓯市"},{value:350784,text:"建阳区"},{value:350785,text:"其它区"}]},{value:350800,text:"龙岩市",children:[{value:350802,text:"新罗区"},{value:350821,text:"长汀县"},{value:350822,text:"永定区"},{value:350823,text:"上杭县"},{value:350824,text:"武平县"},{value:350825,text:"连城县"},{value:350881,text:"漳平市"},{value:350882,text:"其它区"}]},{value:350900,text:"宁德市",children:[{value:350902,text:"蕉城区"},{value:350921,text:"霞浦县"},{value:350922,text:"古田县"},{value:350923,text:"屏南县"},{value:350924,text:"寿宁县"},{value:350925,text:"周宁县"},{value:350926,text:"柘荣县"},{value:350981,text:"福安市"},{value:350982,text:"福鼎市"},{value:350983,text:"其它区"}]}]},{value:36e4,text:"江西",children:[{value:360100,text:"南昌市",children:[{value:360102,text:"东湖区"},{value:360103,text:"西湖区"},{value:360104,text:"青云谱区"},{value:360105,text:"湾里区"},{value:360111,text:"青山湖区"},{value:360121,text:"南昌县"},{value:360122,text:"新建县"},{value:360123,text:"安义县"},{value:360124,text:"进贤县"},{value:360125,text:"红谷滩新区"},{value:360126,text:"经济技术开发区"},{value:360127,text:"昌北区"},{value:360128,text:"其它区"}]},{value:360200,text:"景德镇市",children:[{value:360202,text:"昌江区"},{value:360203,text:"珠山区"},{value:360222,text:"浮梁县"},{value:360281,text:"乐平市"},{value:360282,text:"其它区"}]},{value:360300,text:"萍乡市",children:[{value:360302,text:"安源区"},{value:360313,text:"湘东区"},{value:360321,text:"莲花县"},{value:360322,text:"上栗县"},{value:360323,text:"芦溪县"},{value:360324,text:"其它区"}]},{value:360400,text:"九江市",children:[{value:360402,text:"庐山区"},{value:360403,text:"浔阳区"},{value:360421,text:"九江县"},{value:360423,text:"武宁县"},{value:360424,text:"修水县"},{value:360425,text:"永修县"},{value:360426,text:"德安县"},{value:360427,text:"星子县"},{value:360428,text:"都昌县"},{value:360429,text:"湖口县"},{value:360430,text:"彭泽县"},{value:360481,text:"瑞昌市"},{value:360482,text:"其它区"},{value:360483,text:"共青城市"}]},{value:360500,text:"新余市",children:[{value:360502,text:"渝水区"},{value:360521,text:"分宜县"},{value:360522,text:"其它区"}]},{value:360600,text:"鹰潭市",children:[{value:360602,text:"月湖区"},{value:360622,text:"余江县"},{value:360681,text:"贵溪市"},{value:360682,text:"其它区"}]},{value:360700,text:"赣州市",children:[{value:360702,text:"章贡区"},{value:360721,text:"赣县"},{value:360722,text:"信丰县"},{value:360723,text:"大余县"},{value:360724,text:"上犹县"},{value:360725,text:"崇义县"},{value:360726,text:"安远县"},{value:360727,text:"龙南县"},{value:360728,text:"定南县"},{value:360729,text:"全南县"},{value:360730,text:"宁都县"},{value:360731,text:"于都县"},{value:360732,text:"兴国县"},{value:360733,text:"会昌县"},{value:360734,text:"寻乌县"},{value:360735,text:"石城县"},{value:360751,text:"黄金区"},{value:360781,text:"瑞金市"},{value:360782,text:"南康区"},{value:360783,text:"其它区"}]},{value:360800,text:"吉安市",children:[{value:360802,text:"吉州区"},{value:360803,text:"青原区"},{value:360821,text:"吉安县"},{value:360822,text:"吉水县"},{value:360823,text:"峡江县"},{value:360824,text:"新干县"},{value:360825,text:"永丰县"},{value:360826,text:"泰和县"},{value:360827,text:"遂川县"},{value:360828,text:"万安县"},{value:360829,text:"安福县"},{value:360830,text:"永新县"},{value:360881,text:"井冈山市"},{value:360882,text:"其它区"}]},{value:360900,text:"宜春市",children:[{value:360902,text:"袁州区"},{value:360921,text:"奉新县"},{value:360922,text:"万载县"},{value:360923,text:"上高县"},{value:360924,text:"宜丰县"},{value:360925,text:"靖安县"},{value:360926,text:"铜鼓县"},{value:360981,text:"丰城市"},{value:360982,text:"樟树市"},{value:360983,text:"高安市"},{value:360984,text:"其它区"}]},{value:361e3,text:"抚州市",children:[{value:361002,text:"临川区"},{value:361021,text:"南城县"},{value:361022,text:"黎川县"},{value:361023,text:"南丰县"},{value:361024,text:"崇仁县"},{value:361025,text:"乐安县"},{value:361026,text:"宜黄县"},{value:361027,text:"金溪县"},{value:361028,text:"资溪县"},{value:361029,text:"东乡县"},{value:361030,text:"广昌县"},{value:361031,text:"其它区"}]},{value:361100,text:"上饶市",children:[{value:361102,text:"信州区"},{value:361121,text:"上饶县"},{value:361122,text:"广丰区"},{value:361123,text:"玉山县"},{value:361124,text:"铅山县"},{value:361125,text:"横峰县"},{value:361126,text:"弋阳县"},{value:361127,text:"余干县"},{value:361128,text:"鄱阳县"},{value:361129,text:"万年县"},{value:361130,text:"婺源县"},{value:361181,text:"德兴市"},{value:361182,text:"其它区"}]}]},{value:37e4,text:"山东",children:[{value:370100,text:"济南市",children:[{value:370102,text:"历下区"},{value:370103,text:"市中区"},{value:370104,text:"槐荫区"},{value:370105,text:"天桥区"},{value:370112,text:"历城区"},{value:370113,text:"长清区"},{value:370124,text:"平阴县"},{value:370125,text:"济阳县"},{value:370126,text:"商河县"},{value:370181,text:"章丘市"},{value:370182,text:"其它区"}]},{value:370200,text:"青岛市",children:[{value:370202,text:"市南区"},{value:370203,text:"市北区"},{value:370205,text:"四方区"},{value:370211,text:"黄岛区"},{value:370212,text:"崂山区"},{value:370213,text:"李沧区"},{value:370214,text:"城阳区"},{value:370251,text:"开发区"},{value:370281,text:"胶州市"},{value:370282,text:"即墨市"},{value:370283,text:"平度市"},{value:370284,text:"胶南市"},{value:370285,text:"莱西市"},{value:370286,text:"其它区"}]},{value:370300,text:"淄博市",children:[{value:370302,text:"淄川区"},{value:370303,text:"张店区"},{value:370304,text:"博山区"},{value:370305,text:"临淄区"},{value:370306,text:"周村区"},{value:370321,text:"桓台县"},{value:370322,text:"高青县"},{value:370323,text:"沂源县"},{value:370324,text:"其它区"}]},{value:370400,text:"枣庄市",children:[{value:370402,text:"市中区"},{value:370403,text:"薛城区"},{value:370404,text:"峄城区"},{value:370405,text:"台儿庄区"},{value:370406,text:"山亭区"},{value:370481,text:"滕州市"},{value:370482,text:"其它区"}]},{value:370500,text:"东营市",children:[{value:370502,text:"东营区"},{value:370503,text:"河口区"},{value:370521,text:"垦利县"},{value:370522,text:"利津县"},{value:370523,text:"广饶县"},{value:370589,text:"西城区"},{value:370590,text:"东城区"},{value:370591,text:"其它区"}]},{value:370600,text:"烟台市",children:[{value:370602,text:"芝罘区"},{value:370611,text:"福山区"},{value:370612,text:"牟平区"},{value:370613,text:"莱山区"},{value:370634,text:"长岛县"},{value:370681,text:"龙口市"},{value:370682,text:"莱阳市"},{value:370683,text:"莱州市"},{value:370684,text:"蓬莱市"},{value:370685,text:"招远市"},{value:370686,text:"栖霞市"},{value:370687,text:"海阳市"},{value:370688,text:"其它区"}]},{value:370700,text:"潍坊市",children:[{value:370702,text:"潍城区"},{value:370703,text:"寒亭区"},{value:370704,text:"坊子区"},{value:370705,text:"奎文区"},{value:370724,text:"临朐县"},{value:370725,text:"昌乐县"},{value:370751,text:"开发区"},{value:370781,text:"青州市"},{value:370782,text:"诸城市"},{value:370783,text:"寿光市"},{value:370784,text:"安丘市"},{value:370785,text:"高密市"},{value:370786,text:"昌邑市"},{value:370787,text:"其它区"}]},{value:370800,text:"济宁市",children:[{value:370802,text:"市中区"},{value:370811,text:"任城区"},{value:370826,text:"微山县"},{value:370827,text:"鱼台县"},{value:370828,text:"金乡县"},{value:370829,text:"嘉祥县"},{value:370830,text:"汶上县"},{value:370831,text:"泗水县"},{value:370832,text:"梁山县"},{value:370881,text:"曲阜市"},{value:370882,text:"兖州区"},{value:370883,text:"邹城市"},{value:370884,text:"其它区"}]},{value:370900,text:"泰安市",children:[{value:370902,text:"泰山区"},{value:370903,text:"岱岳区"},{value:370921,text:"宁阳县"},{value:370923,text:"东平县"},{value:370982,text:"新泰市"},{value:370983,text:"肥城市"},{value:370984,text:"其它区"}]},{value:371e3,text:"威海市",children:[{value:371002,text:"环翠区"},{value:371081,text:"文登区"},{value:371082,text:"荣成市"},{value:371083,text:"乳山市"},{value:371084,text:"其它区"}]},{value:371100,text:"日照市",children:[{value:371102,text:"东港区"},{value:371103,text:"岚山区"},{value:371121,text:"五莲县"},{value:371122,text:"莒县"},{value:371123,text:"其它区"}]},{value:371200,text:"莱芜市",children:[{value:371202,text:"莱城区"},{value:371203,text:"钢城区"},{value:371204,text:"其它区"}]},{value:371300,text:"临沂市",children:[{value:371302,text:"兰山区"},{value:371311,text:"罗庄区"},{value:371312,text:"河东区"},{value:371321,text:"沂南县"},{value:371322,text:"郯城县"},{value:371323,text:"沂水县"},{value:371324,text:"兰陵县"},{value:371325,text:"费县"},{value:371326,text:"平邑县"},{value:371327,text:"莒南县"},{value:371328,text:"蒙阴县"},{value:371329,text:"临沭县"},{value:371330,text:"其它区"}]},{value:371400,text:"德州市",children:[{value:371402,text:"德城区"},{value:371421,text:"陵城区"},{value:371422,text:"宁津县"},{value:371423,text:"庆云县"},{value:371424,text:"临邑县"},{value:371425,text:"齐河县"},{value:371426,text:"平原县"},{value:371427,text:"夏津县"},{value:371428,text:"武城县"},{value:371451,text:"开发区"},{value:371481,text:"乐陵市"},{value:371482,text:"禹城市"},{value:371483,text:"其它区"}]},{value:371500,text:"聊城市",children:[{value:371502,text:"东昌府区"},{value:371521,text:"阳谷县"},{value:371522,text:"莘县"},{value:371523,text:"茌平县"},{value:371524,text:"东阿县"},{value:371525,text:"冠县"},{value:371526,text:"高唐县"},{value:371581,text:"临清市"},{value:371582,text:"其它区"}]},{value:371600,text:"滨州市",children:[{value:371602,text:"滨城区"},{value:371621,text:"惠民县"},{value:371622,text:"阳信县"},{value:371623,text:"无棣县"},{value:371624,text:"沾化区"},{value:371625,text:"博兴县"},{value:371626,text:"邹平县"},{value:371627,text:"其它区"}]},{value:371700,text:"菏泽市",children:[{value:371702,text:"牡丹区"},{value:371721,text:"曹县"},{value:371722,text:"单县"},{value:371723,text:"成武县"},{value:371724,text:"巨野县"},{value:371725,text:"郓城县"},{value:371726,text:"鄄城县"},{value:371727,text:"定陶县"},{value:371728,text:"东明县"},{value:371729,text:"其它区"}]}]},{value:41e4,text:"河南",children:[{value:410100,text:"郑州市",children:[{value:410102,text:"中原区"},{value:410103,text:"二七区"},{value:410104,text:"管城回族区"},{value:410105,text:"金水区"},{value:410106,text:"上街区"},{value:410108,text:"惠济区"},{value:410122,text:"中牟县"},{value:410181,text:"巩义市"},{value:410182,text:"荥阳市"},{value:410183,text:"新密市"},{value:410184,text:"新郑市"},{value:410185,text:"登封市"},{value:410186,text:"郑东新区"},{value:410187,text:"高新区"},{value:410188,text:"其它区"}]},{value:410200,text:"开封市",children:[{value:410202,text:"龙亭区"},{value:410203,text:"顺河回族区"},{value:410204,text:"鼓楼区"},{value:410205,text:"禹王台区"},{value:410211,text:"金明区"},{value:410221,text:"杞县"},{value:410222,text:"通许县"},{value:410223,text:"尉氏县"},{value:410224,text:"祥符区"},{value:410225,text:"兰考县"},{value:410226,text:"其它区"}]},{value:410300,text:"洛阳市",children:[{value:410302,text:"老城区"},{value:410303,text:"西工区"},{value:410304,text:"瀍河回族区"},{value:410305,text:"涧西区"},{value:410306,text:"吉利区"},{value:410307,text:"洛龙区"},{value:410322,text:"孟津县"},{value:410323,text:"新安县"},{value:410324,text:"栾川县"},{value:410325,text:"嵩县"},{value:410326,text:"汝阳县"},{value:410327,text:"宜阳县"},{value:410328,text:"洛宁县"},{value:410329,text:"伊川县"},{value:410381,text:"偃师市"},{value:471004,text:"高新区"},{value:471005,text:"其它区"}]},{value:410400,text:"平顶山市",children:[{value:410402,text:"新华区"},{value:410403,text:"卫东区"},{value:410404,text:"石龙区"},{value:410411,text:"湛河区"},{value:410421,text:"宝丰县"},{value:410422,text:"叶县"},{value:410423,text:"鲁山县"},{value:410425,text:"郏县"},{value:410481,text:"舞钢市"},{value:410482,text:"汝州市"},{value:410483,text:"其它区"}]},{value:410500,text:"安阳市",children:[{value:410502,text:"文峰区"},{value:410503,text:"北关区"},{value:410505,text:"殷都区"},{value:410506,text:"龙安区"},{value:410522,text:"安阳县"},{value:410523,text:"汤阴县"},{value:410526,text:"滑县"},{value:410527,text:"内黄县"},{value:410581,text:"林州市"},{value:410582,text:"其它区"}]},{value:410600,text:"鹤壁市",children:[{value:410602,text:"鹤山区"},{value:410603,text:"山城区"},{value:410611,text:"淇滨区"},{value:410621,text:"浚县"},{value:410622,text:"淇县"},{value:410623,text:"其它区"}]},{value:410700,text:"新乡市",children:[{value:410702,text:"红旗区"},{value:410703,text:"卫滨区"},{value:410704,text:"凤泉区"},{value:410711,text:"牧野区"},{value:410721,text:"新乡县"},{value:410724,text:"获嘉县"},{value:410725,text:"原阳县"},{value:410726,text:"延津县"},{value:410727,text:"封丘县"},{value:410728,text:"长垣县"},{value:410781,text:"卫辉市"},{value:410782,text:"辉县市"},{value:410783,text:"其它区"}]},{value:410800,text:"焦作市",children:[{value:410802,text:"解放区"},{value:410803,text:"中站区"},{value:410804,text:"马村区"},{value:410811,text:"山阳区"},{value:410821,text:"修武县"},{value:410822,text:"博爱县"},{value:410823,text:"武陟县"},{value:410825,text:"温县"},{value:410882,text:"沁阳市"},{value:410883,text:"孟州市"},{value:410884,text:"其它区"}]},{value:410881,text:"济源市",children:[{value:419001001,text:"沁园街道"},{value:419001002,text:"济水街道"},{value:419001003,text:"北海街道"},{value:419001004,text:"天坛街道"},{value:419001005,text:"玉泉街道"},{value:419001100,text:"克井镇"},{value:419001101,text:"五龙口镇"},{value:419001102,text:"轵城镇"},{value:419001103,text:"承留镇"},{value:419001104,text:"邵原镇"},{value:419001105,text:"坡头镇"},{value:419001106,text:"梨林镇"},{value:419001107,text:"大峪镇"},{value:419001108,text:"思礼镇"},{value:419001109,text:"王屋镇"},{value:419001110,text:"下冶镇"}]},{value:410900,text:"濮阳市",children:[{value:410902,text:"华龙区"},{value:410922,text:"清丰县"},{value:410923,text:"南乐县"},{value:410926,text:"范县"},{value:410927,text:"台前县"},{value:410928,text:"濮阳县"},{value:410929,text:"其它区"}]},{value:411e3,text:"许昌市",children:[{value:411002,text:"魏都区"},{value:411023,text:"许昌县"},{value:411024,text:"鄢陵县"},{value:411025,text:"襄城县"},{value:411081,text:"禹州市"},{value:411082,text:"长葛市"},{value:411083,text:"其它区"}]},{value:411100,text:"漯河市",children:[{value:411102,text:"源汇区"},{value:411103,text:"郾城区"},{value:411104,text:"召陵区"},{value:411121,text:"舞阳县"},{value:411122,text:"临颍县"},{value:411123,text:"其它区"}]},{value:411200,text:"三门峡市",children:[{value:411202,text:"湖滨区"},{value:411221,text:"渑池县"},{value:411222,text:"陕州区"},{value:411224,text:"卢氏县"},{value:411281,text:"义马市"},{value:411282,text:"灵宝市"},{value:411283,text:"其它区"}]},{value:411300,text:"南阳市",children:[{value:411302,text:"宛城区"},{value:411303,text:"卧龙区"},{value:411321,text:"南召县"},{value:411322,text:"方城县"},{value:411323,text:"西峡县"},{value:411324,text:"镇平县"},{value:411325,text:"内乡县"},{value:411326,text:"淅川县"},{value:411327,text:"社旗县"},{value:411328,text:"唐河县"},{value:411329,text:"新野县"},{value:411330,text:"桐柏县"},{value:411381,text:"邓州市"},{value:411382,text:"其它区"}]},{value:411400,text:"商丘市",children:[{value:411402,text:"梁园区"},{value:411403,text:"睢阳区"},{value:411421,text:"民权县"},{value:411422,text:"睢县"},{value:411423,text:"宁陵县"},{value:411424,text:"柘城县"},{value:411425,text:"虞城县"},{value:411426,text:"夏邑县"},{value:411481,text:"永城市"},{value:411482,text:"其它区"}]},{value:411500,text:"信阳市",children:[{value:411502,text:"浉河区"},{value:411503,text:"平桥区"},{value:411521,text:"罗山县"},{value:411522,text:"光山县"},{value:411523,text:"新县"},{value:411524,text:"商城县"},{value:411525,text:"固始县"},{value:411526,text:"潢川县"},{value:411527,text:"淮滨县"},{value:411528,text:"息县"},{value:411529,text:"其它区"}]},{value:411600,text:"周口市",children:[{value:411602,text:"川汇区"},{value:411621,text:"扶沟县"},{value:411622,text:"西华县"},{value:411623,text:"商水县"},{value:411624,text:"沈丘县"},{value:411625,text:"郸城县"},{value:411626,text:"淮阳县"},{value:411627,text:"太康县"},{value:411628,text:"鹿邑县"},{value:411681,text:"项城市"},{value:411682,text:"其它区"}]},{value:411700,text:"驻马店市",children:[{value:411702,text:"驿城区"},{value:411721,text:"西平县"},{value:411722,text:"上蔡县"},{value:411723,text:"平舆县"},{value:411724,text:"正阳县"},{value:411725,text:"确山县"},{value:411726,text:"泌阳县"},{value:411727,text:"汝南县"},{value:411728,text:"遂平县"},{value:411729,text:"新蔡县"},{value:411730,text:"其它区"}]}]},{value:42e4,text:"湖北",children:[{value:420100,text:"武汉市",children:[{value:420102,text:"江岸区"},{value:420103,text:"江汉区"},{value:420104,text:"硚口区"},{value:420105,text:"汉阳区"},{value:420106,text:"武昌区"},{value:420107,text:"青山区"},{value:420111,text:"洪山区"},{value:420112,text:"东西湖区"},{value:420113,text:"汉南区"},{value:420114,text:"蔡甸区"},{value:420115,text:"江夏区"},{value:420116,text:"黄陂区"},{value:420117,text:"新洲区"},{value:420118,text:"其它区"}]},{value:420200,text:"黄石市",children:[{value:420202,text:"黄石港区"},{value:420203,text:"西塞山区"},{value:420204,text:"下陆区"},{value:420205,text:"铁山区"},{value:420222,text:"阳新县"},{value:420281,text:"大冶市"},{value:420282,text:"其它区"}]},{value:420300,text:"十堰市",children:[{value:420302,text:"茅箭区"},{value:420303,text:"张湾区"},{value:420321,text:"郧阳区"},{value:420322,text:"郧西县"},{value:420323,text:"竹山县"},{value:420324,text:"竹溪县"},{value:420325,text:"房县"},{value:420381,text:"丹江口市"},{value:420382,text:"城区"},{value:420383,text:"其它区"}]},{value:420500,text:"宜昌市",children:[{value:420502,text:"西陵区"},{value:420503,text:"伍家岗区"},{value:420504,text:"点军区"},{value:420505,text:"猇亭区"},{value:420506,text:"夷陵区"},{value:420525,text:"远安县"},{value:420526,text:"兴山县"},{value:420527,text:"秭归县"},{value:420528,text:"长阳土家族自治县"},{value:420529,text:"五峰土家族自治县"},{value:420551,text:"葛洲坝区"},{value:420552,text:"开发区"},{value:420581,text:"宜都市"},{value:420582,text:"当阳市"},{value:420583,text:"枝江市"},{value:420584,text:"其它区"}]},{value:420600,text:"襄阳市",children:[{value:420602,text:"襄城区"},{value:420606,text:"樊城区"},{value:420607,text:"襄州区"},{value:420624,text:"南漳县"},{value:420625,text:"谷城县"},{value:420626,text:"保康县"},{value:420682,text:"老河口市"},{value:420683,text:"枣阳市"},{value:420684,text:"宜城市"},{value:420685,text:"其它区"}]},{value:420700,text:"鄂州市",children:[{value:420702,text:"梁子湖区"},{value:420703,text:"华容区"},{value:420704,text:"鄂城区"},{value:420705,text:"其它区"}]},{value:420800,text:"荆门市",children:[{value:420802,text:"东宝区"},{value:420804,text:"掇刀区"},{value:420821,text:"京山县"},{value:420822,text:"沙洋县"},{value:420881,text:"钟祥市"},{value:420882,text:"其它区"}]},{value:420900,text:"孝感市",children:[{value:420902,text:"孝南区"},{value:420921,text:"孝昌县"},{value:420922,text:"大悟县"},{value:420923,text:"云梦县"},{value:420981,text:"应城市"},{value:420982,text:"安陆市"},{value:420984,text:"汉川市"},{value:420985,text:"其它区"}]},{value:421e3,text:"荆州市",children:[{value:421002,text:"沙市区"},{value:421003,text:"荆州区"},{value:421022,text:"公安县"},{value:421023,text:"监利县"},{value:421024,text:"江陵县"},{value:421081,text:"石首市"},{value:421083,text:"洪湖市"},{value:421087,text:"松滋市"},{value:421088,text:"其它区"}]},{value:421100,text:"黄冈市",children:[{value:421102,text:"黄州区"},{value:421121,text:"团风县"},{value:421122,text:"红安县"},{value:421123,text:"罗田县"},{value:421124,text:"英山县"},{value:421125,text:"浠水县"},{value:421126,text:"蕲春县"},{value:421127,text:"黄梅县"},{value:421181,text:"麻城市"},{value:421182,text:"武穴市"},{value:421183,text:"其它区"}]},{value:421200,text:"咸宁市",children:[{value:421202,text:"咸安区"},{value:421221,text:"嘉鱼县"},{value:421222,text:"通城县"},{value:421223,text:"崇阳县"},{value:421224,text:"通山县"},{value:421281,text:"赤壁市"},{value:421282,text:"温泉城区"},{value:421283,text:"其它区"}]},{value:421300,text:"随州市",children:[{value:421302,text:"曾都区"},{value:421321,text:"随县"},{value:421381,text:"广水市"},{value:421382,text:"其它区"}]},{value:422800,text:"恩施土家族苗族自治州",children:[{value:422801,text:"恩施市"},{value:422802,text:"利川市"},{value:422822,text:"建始县"},{value:422823,text:"巴东县"},{value:422825,text:"宣恩县"},{value:422826,text:"咸丰县"},{value:422827,text:"来凤县"},{value:422828,text:"鹤峰县"},{value:422829,text:"其它区"}]},{value:429004,text:"仙桃市",children:[{value:429004001,text:"沙嘴街道"},{value:429004002,text:"干河街道"},{value:429004003,text:"龙华山办事处"},{value:429004100,text:"郑场镇"},{value:429004101,text:"毛嘴镇"},{value:429004102,text:"豆河镇"},{value:429004103,text:"三伏潭镇"},{value:429004104,text:"胡场镇"},{value:429004105,text:"长倘口镇"},{value:429004106,text:"西流河镇"},{value:429004107,text:"沙湖镇"},{value:429004108,text:"杨林尾镇"},{value:429004109,text:"彭场镇"},{value:429004110,text:"张沟镇"},{value:429004111,text:"郭河镇"},{value:429004112,text:"沔城回族镇"},{value:429004113,text:"通海口镇"},{value:429004114,text:"陈场镇"},{value:429004400,text:"工业园区"},{value:429004401,text:"九合垸原种场"},{value:429004402,text:"沙湖原种场"},{value:429004404,text:"五湖渔场"},{value:429004405,text:"赵西垸林场"},{value:429004407,text:"畜禽良种场"},{value:429004408,text:"排湖风景区"}]},{value:429005,text:"潜江市",children:[{value:429005001,text:"园林办事处"},{value:429005002,text:"杨市办事处"},{value:429005003,text:"周矶办事处"},{value:429005004,text:"广华办事处"},{value:429005005,text:"泰丰办事处"},{value:429005006,text:"高场办事处"},{value:429005100,text:"竹根滩镇"},{value:429005101,text:"渔洋镇"},{value:429005102,text:"王场镇"},{value:429005103,text:"高石碑镇"},{value:429005104,text:"熊口镇"},{value:429005105,text:"老新镇"},{value:429005106,text:"浩口镇"},{value:429005107,text:"积玉口镇"},{value:429005108,text:"张金镇"},{value:429005109,text:"龙湾镇"},{value:429005400,text:"江汉石油管理局"},{value:429005401,text:"潜江经济开发区"},{value:429005450,text:"周矶管理区"},{value:429005451,text:"后湖管理区"},{value:429005452,text:"熊口管理区"},{value:429005453,text:"总口管理区"},{value:429005454,text:"白鹭湖管理区"},{value:429005455,text:"运粮湖管理区"},{value:429005457,text:"浩口原种场"}]},{value:429006,text:"天门市",children:[{value:429006001,text:"竟陵街道"},{value:429006002,text:"侨乡街道开发区"},{value:429006003,text:"杨林街道"},{value:429006100,text:"多宝镇"},{value:429006101,text:"拖市镇"},{value:429006102,text:"张港镇"},{value:429006103,text:"蒋场镇"},{value:429006104,text:"汪场镇"},{value:429006105,text:"渔薪镇"},{value:429006106,text:"黄潭镇"},{value:429006107,text:"岳口镇"},{value:429006108,text:"横林镇"},{value:429006109,text:"彭市镇"},{value:429006110,text:"麻洋镇"},{value:429006111,text:"多祥镇"},{value:429006112,text:"干驿镇"},{value:429006113,text:"马湾镇"},{value:429006114,text:"卢市镇"},{value:429006115,text:"小板镇"},{value:429006116,text:"九真镇"},{value:429006118,text:"皂市镇"},{value:429006119,text:"胡市镇"},{value:429006120,text:"石河镇"},{value:429006121,text:"佛子山镇"},{value:429006201,text:"净潭乡"},{value:429006450,text:"蒋湖农场"},{value:429006451,text:"白茅湖农场"},{value:429006452,text:"沉湖管委会"}]},{value:429021,text:"神农架林区",children:[{value:429021100,text:"松柏镇"},{value:429021101,text:"阳日镇"},{value:429021102,text:"木鱼镇"},{value:429021103,text:"红坪镇"},{value:429021104,text:"新华镇"},{value:429021105,text:"九湖镇"},{value:429021200,text:"宋洛乡"},{value:429021202,text:"下谷坪土家族乡"}]}]},{value:43e4,text:"湖南",children:[{value:430100,text:"长沙市",children:[{value:430102,text:"芙蓉区"},{value:430103,text:"天心区"},{value:430104,text:"岳麓区"},{value:430105,text:"开福区"},{value:430111,text:"雨花区"},{value:430121,text:"长沙县"},{value:430122,text:"望城区"},{value:430124,text:"宁乡县"},{value:430181,text:"浏阳市"},{value:430182,text:"其它区"}]},{value:430200,text:"株洲市",children:[{value:430202,text:"荷塘区"},{value:430203,text:"芦淞区"},{value:430204,text:"石峰区"},{value:430211,text:"天元区"},{value:430221,text:"株洲县"},{value:430223,text:"攸县"},{value:430224,text:"茶陵县"},{value:430225,text:"炎陵县"},{value:430281,text:"醴陵市"},{value:430282,text:"其它区"}]},{value:430300,text:"湘潭市",children:[{value:430302,text:"雨湖区"},{value:430304,text:"岳塘区"},{value:430321,text:"湘潭县"},{value:430381,text:"湘乡市"},{value:430382,text:"韶山市"},{value:430383,text:"其它区"}]},{value:430400,text:"衡阳市",children:[{value:430405,text:"珠晖区"},{value:430406,text:"雁峰区"},{value:430407,text:"石鼓区"},{value:430408,text:"蒸湘区"},{value:430412,text:"南岳区"},{value:430421,text:"衡阳县"},{value:430422,text:"衡南县"},{value:430423,text:"衡山县"},{value:430424,text:"衡东县"},{value:430426,text:"祁东县"},{value:430481,text:"耒阳市"},{value:430482,text:"常宁市"},{value:430483,text:"其它区"}]},{value:430500,text:"邵阳市",children:[{value:430502,text:"双清区"},{value:430503,text:"大祥区"},{value:430511,text:"北塔区"},{value:430521,text:"邵东县"},{value:430522,text:"新邵县"},{value:430523,text:"邵阳县"},{value:430524,text:"隆回县"},{value:430525,text:"洞口县"},{value:430527,text:"绥宁县"},{value:430528,text:"新宁县"},{value:430529,text:"城步苗族自治县"},{value:430581,text:"武冈市"},{value:430582,text:"其它区"}]},{value:430600,text:"岳阳市",children:[{value:430602,text:"岳阳楼区"},{value:430603,text:"云溪区"},{value:430611,text:"君山区"},{value:430621,text:"岳阳县"},{value:430623,text:"华容县"},{value:430624,text:"湘阴县"},{value:430626,text:"平江县"},{value:430681,text:"汨罗市"},{value:430682,text:"临湘市"},{value:430683,text:"其它区"}]},{value:430700,text:"常德市",children:[{value:430702,text:"武陵区"},{value:430703,text:"鼎城区"},{value:430721,text:"安乡县"},{value:430722,text:"汉寿县"},{value:430723,text:"澧县"},{value:430724,text:"临澧县"},{value:430725,text:"桃源县"},{value:430726,text:"石门县"},{value:430781,text:"津市市"},{value:430782,text:"其它区"}]},{value:430800,text:"张家界市",children:[{value:430802,text:"永定区"},{value:430811,text:"武陵源区"},{value:430821,text:"慈利县"},{value:430822,text:"桑植县"},{value:430823,text:"其它区"}]},{value:430900,text:"益阳市",children:[{value:430902,text:"资阳区"},{value:430903,text:"赫山区"},{value:430921,text:"南县"},{value:430922,text:"桃江县"},{value:430923,text:"安化县"},{value:430981,text:"沅江市"},{value:430982,text:"其它区"}]},{value:431e3,text:"郴州市",children:[{value:431002,text:"北湖区"},{value:431003,text:"苏仙区"},{value:431021,text:"桂阳县"},{value:431022,text:"宜章县"},{value:431023,text:"永兴县"},{value:431024,text:"嘉禾县"},{value:431025,text:"临武县"},{value:431026,text:"汝城县"},{value:431027,text:"桂东县"},{value:431028,text:"安仁县"},{value:431081,text:"资兴市"},{value:431082,text:"其它区"}]},{value:431100,text:"永州市",children:[{value:431102,text:"零陵区"},{value:431103,text:"冷水滩区"},{value:431121,text:"祁阳县"},{value:431122,text:"东安县"},{value:431123,text:"双牌县"},{value:431124,text:"道县"},{value:431125,text:"江永县"},{value:431126,text:"宁远县"},{value:431127,text:"蓝山县"},{value:431128,text:"新田县"},{value:431129,text:"江华瑶族自治县"},{value:431130,text:"其它区"}]},{value:431200,text:"怀化市",children:[{value:431202,text:"鹤城区"},{value:431221,text:"中方县"},{value:431222,text:"沅陵县"},{value:431223,text:"辰溪县"},{value:431224,text:"溆浦县"},{value:431225,text:"会同县"},{value:431226,text:"麻阳苗族自治县"},{value:431227,text:"新晃侗族自治县"},{value:431228,text:"芷江侗族自治县"},{value:431229,text:"靖州苗族侗族自治县"},{value:431230,text:"通道侗族自治县"},{value:431281,text:"洪江市"},{value:431282,text:"其它区"}]},{value:431300,text:"娄底市",children:[{value:431302,text:"娄星区"},{value:431321,text:"双峰县"},{value:431322,text:"新化县"},{value:431381,text:"冷水江市"},{value:431382,text:"涟源市"},{value:431383,text:"其它区"}]},{value:433100,text:"湘西土家族苗族自治州",children:[{value:433101,text:"吉首市"},{value:433122,text:"泸溪县"},{value:433123,text:"凤凰县"},{value:433124,text:"花垣县"},{value:433125,text:"保靖县"},{value:433126,text:"古丈县"},{value:433127,text:"永顺县"},{value:433130,text:"龙山县"},{value:433131,text:"其它区"}]}]},{value:44e4,text:"广东",children:[{value:440100,text:"广州市",children:[{value:440103,text:"荔湾区"},{value:440104,text:"越秀区"},{value:440105,text:"海珠区"},{value:440106,text:"天河区"},{value:440111,text:"白云区"},{value:440112,text:"黄埔区"},{value:440113,text:"番禺区"},{value:440114,text:"花都区"},{value:440115,text:"南沙区"},{value:440116,text:"萝岗区"},{value:440183,text:"增城区"},{value:440184,text:"从化区"},{value:440188,text:"东山区"},{value:440189,text:"其它区"}]},{value:440200,text:"韶关市",children:[{value:440203,text:"武江区"},{value:440204,text:"浈江区"},{value:440205,text:"曲江区"},{value:440222,text:"始兴县"},{value:440224,text:"仁化县"},{value:440229,text:"翁源县"},{value:440232,text:"乳源瑶族自治县"},{value:440233,text:"新丰县"},{value:440281,text:"乐昌市"},{value:440282,text:"南雄市"},{value:440283,text:"其它区"}]},{value:440300,text:"深圳市",children:[{value:440303,text:"罗湖区"},{value:440304,text:"福田区"},{value:440305,text:"南山区"},{value:440306,text:"宝安区"},{value:440307,text:"龙岗区"},{value:440308,text:"盐田区"},{value:440309,text:"其它区"},{value:440320,text:"光明新区"},{value:440321,text:"坪山新区"},{value:440322,text:"大鹏新区"},{value:440323,text:"龙华新区"}]},{value:440400,text:"珠海市",children:[{value:440402,text:"香洲区"},{value:440403,text:"斗门区"},{value:440404,text:"金湾区"},{value:440486,text:"金唐区"},{value:440487,text:"南湾区"},{value:440488,text:"其它区"}]},{value:440500,text:"汕头市",children:[{value:440507,text:"龙湖区"},{value:440511,text:"金平区"},{value:440512,text:"濠江区"},{value:440513,text:"潮阳区"},{value:440514,text:"潮南区"},{value:440515,text:"澄海区"},{value:440523,text:"南澳县"},{value:440524,text:"其它区"}]},{value:440600,text:"佛山市",children:[{value:440604,text:"禅城区"},{value:440605,text:"南海区"},{value:440606,text:"顺德区"},{value:440607,text:"三水区"},{value:440608,text:"高明区"},{value:440609,text:"其它区"}]},{value:440700,text:"江门市",children:[{value:440703,text:"蓬江区"},{value:440704,text:"江海区"},{value:440705,text:"新会区"},{value:440781,text:"台山市"},{value:440783,text:"开平市"},{value:440784,text:"鹤山市"},{value:440785,text:"恩平市"},{value:440786,text:"其它区"}]},{value:440800,text:"湛江市",children:[{value:440802,text:"赤坎区"},{value:440803,text:"霞山区"},{value:440804,text:"坡头区"},{value:440811,text:"麻章区"},{value:440823,text:"遂溪县"},{value:440825,text:"徐闻县"},{value:440881,text:"廉江市"},{value:440882,text:"雷州市"},{value:440883,text:"吴川市"},{value:440884,text:"其它区"}]},{value:440900,text:"茂名市",children:[{value:440902,text:"茂南区"},{value:440903,text:"电白区"},{value:440923,text:"电白县"},{value:440981,text:"高州市"},{value:440982,text:"化州市"},{value:440983,text:"信宜市"},{value:440984,text:"其它区"}]},{value:441200,text:"肇庆市",children:[{value:441202,text:"端州区"},{value:441203,text:"鼎湖区"},{value:441223,text:"广宁县"},{value:441224,text:"怀集县"},{value:441225,text:"封开县"},{value:441226,text:"德庆县"},{value:441283,text:"高要市"},{value:441284,text:"四会市"},{value:441285,text:"其它区"}]},{value:441300,text:"惠州市",children:[{value:441302,text:"惠城区"},{value:441303,text:"惠阳区"},{value:441322,text:"博罗县"},{value:441323,text:"惠东县"},{value:441324,text:"龙门县"},{value:441325,text:"其它区"}]},{value:441400,text:"梅州市",children:[{value:441402,text:"梅江区"},{value:441421,text:"梅县区"},{value:441422,text:"大埔县"},{value:441423,text:"丰顺县"},{value:441424,text:"五华县"},{value:441426,text:"平远县"},{value:441427,text:"蕉岭县"},{value:441481,text:"兴宁市"},{value:441482,text:"其它区"}]},{value:441500,text:"汕尾市",children:[{value:441502,text:"城区"},{value:441521,text:"海丰县"},{value:441523,text:"陆河县"},{value:441581,text:"陆丰市"},{value:441582,text:"其它区"}]},{value:441600,text:"河源市",children:[{value:441602,text:"源城区"},{value:441621,text:"紫金县"},{value:441622,text:"龙川县"},{value:441623,text:"连平县"},{value:441624,text:"和平县"},{value:441625,text:"东源县"},{value:441626,text:"其它区"}]},{value:441700,text:"阳江市",children:[{value:441702,text:"江城区"},{value:441721,text:"阳西县"},{value:441723,text:"阳东区"},{value:441781,text:"阳春市"},{value:441782,text:"其它区"}]},{value:441800,text:"清远市",children:[{value:441802,text:"清城区"},{value:441821,text:"佛冈县"},{value:441823,text:"阳山县"},{value:441825,text:"连山壮族瑶族自治县"},{value:441826,text:"连南瑶族自治县"},{value:441827,text:"清新区"},{value:441881,text:"英德市"},{value:441882,text:"连州市"},{value:441883,text:"其它区"}]},{value:441900,text:"东莞市",children:[{value:441901003,text:"东城街道"},{value:441901004,text:"南城街道"},{value:441901005,text:"万江街道"},{value:441901006,text:"莞城街道"},{value:441901101,text:"石碣镇"},{value:441901102,text:"石龙镇"},{value:441901103,text:"茶山镇"},{value:441901104,text:"石排镇"},{value:441901105,text:"企石镇"},{value:441901106,text:"横沥镇"},{value:441901107,text:"桥头镇"},{value:441901108,text:"谢岗镇"},{value:441901109,text:"东坑镇"},{value:441901110,text:"常平镇"},{value:441901111,text:"寮步镇"},{value:441901112,text:"樟木头镇"},{value:441901113,text:"大朗镇"},{value:441901114,text:"黄江镇"},{value:441901115,text:"清溪镇"},{value:441901116,text:"塘厦镇"},{value:441901117,text:"凤岗镇"},{value:441901118,text:"大岭山镇"},{value:441901119,text:"长安镇"},{value:441901121,text:"虎门镇"},{value:441901122,text:"厚街镇"},{value:441901123,text:"沙田镇"},{value:441901124,text:"道滘镇"},{value:441901125,text:"洪梅镇"},{value:441901126,text:"麻涌镇"},{value:441901127,text:"望牛墩镇"},{value:441901128,text:"中堂镇"},{value:441901129,text:"高埗镇"},{value:441901401,text:"松山湖管委会"},{value:441901402,text:"虎门港管委会"},{value:441901403,text:"东莞生态园"}]},{value:442e3,text:"中山市",children:[{value:442001001,text:"石岐区街道"},{value:442001002,text:"东区街道"},{value:442001003,text:"火炬开发区街道"},{value:442001004,text:"西区街道"},{value:442001005,text:"南区街道"},{value:442001006,text:"五桂山街道"},{value:442001100,text:"小榄镇"},{value:442001101,text:"黄圃镇"},{value:442001102,text:"民众镇"},{value:442001103,text:"东凤镇"},{value:442001104,text:"东升镇"},{value:442001105,text:"古镇镇"},{value:442001106,text:"沙溪镇"},{value:442001107,text:"坦洲镇"},{value:442001108,text:"港口镇"},{value:442001109,text:"三角镇"},{value:442001110,text:"横栏镇"},{value:442001111,text:"南头镇"},{value:442001112,text:"阜沙镇"},{value:442001113,text:"南朗镇"},{value:442001114,text:"三乡镇"},{value:442001115,text:"板芙镇"},{value:442001116,text:"大涌镇"},{value:442001117,text:"神湾镇"}]},{value:442101,text:"东沙群岛",children:[]},{value:445100,text:"潮州市",children:[{value:445102,text:"湘桥区"},{value:445121,text:"潮安区"},{value:445122,text:"饶平县"},{value:445185,text:"枫溪区"},{value:445186,text:"其它区"}]},{value:445200,text:"揭阳市",children:[{value:445202,text:"榕城区"},{value:445221,text:"揭东区"},{value:445222,text:"揭西县"},{value:445224,text:"惠来县"},{value:445281,text:"普宁市"},{value:445284,text:"东山区"},{value:445285,text:"其它区"}]},{value:445300,text:"云浮市",children:[{value:445302,text:"云城区"},{value:445321,text:"新兴县"},{value:445322,text:"郁南县"},{value:445323,text:"云安区"},{value:445381,text:"罗定市"},{value:445382,text:"其它区"}]}]},{value:45e4,text:"广西",children:[{value:450100,text:"南宁市",children:[{value:450102,text:"兴宁区"},{value:450103,text:"青秀区"},{value:450105,text:"江南区"},{value:450107,text:"西乡塘区"},{value:450108,text:"良庆区"},{value:450109,text:"邕宁区"},{value:450122,text:"武鸣区"},{value:450123,text:"隆安县"},{value:450124,text:"马山县"},{value:450125,text:"上林县"},{value:450126,text:"宾阳县"},{value:450127,text:"横县"},{value:450128,text:"其它区"}]},{value:450200,text:"柳州市",children:[{value:450202,text:"城中区"},{value:450203,text:"鱼峰区"},{value:450204,text:"柳南区"},{value:450205,text:"柳北区"},{value:450221,text:"柳江县"},{value:450222,text:"柳城县"},{value:450223,text:"鹿寨县"},{value:450224,text:"融安县"},{value:450225,text:"融水苗族自治县"},{value:450226,text:"三江侗族自治县"},{value:450227,text:"其它区"}]},{value:450300,text:"桂林市",children:[{value:450302,text:"秀峰区"},{value:450303,text:"叠彩区"},{value:450304,text:"象山区"},{value:450305,text:"七星区"},{value:450311,text:"雁山区"},{value:450321,text:"阳朔县"},{value:450322,text:"临桂区"},{value:450323,text:"灵川县"},{value:450324,text:"全州县"},{value:450325,text:"兴安县"},{value:450326,text:"永福县"},{value:450327,text:"灌阳县"},{value:450328,text:"龙胜各族自治县"},{value:450329,text:"资源县"},{value:450330,text:"平乐县"},{value:450331,text:"荔浦县"},{value:450332,text:"恭城瑶族自治县"},{value:450333,text:"其它区"}]},{value:450400,text:"梧州市",children:[{value:450403,text:"万秀区"},{value:450404,text:"蝶山区"},{value:450405,text:"长洲区"},{value:450406,text:"龙圩区"},{value:450421,text:"苍梧县"},{value:450422,text:"藤县"},{value:450423,text:"蒙山县"},{value:450481,text:"岑溪市"},{value:450482,text:"其它区"}]},{value:450500,text:"北海市",children:[{value:450502,text:"海城区"},{value:450503,text:"银海区"},{value:450512,text:"铁山港区"},{value:450521,text:"合浦县"},{value:450522,text:"其它区"}]},{value:450600,text:"防城港市",children:[{value:450602,text:"港口区"},{value:450603,text:"防城区"},{value:450621,text:"上思县"},{value:450681,text:"东兴市"},{value:450682,text:"其它区"}]},{value:450700,text:"钦州市",children:[{value:450702,text:"钦南区"},{value:450703,text:"钦北区"},{value:450721,text:"灵山县"},{value:450722,text:"浦北县"},{value:450723,text:"其它区"}]},{value:450800,text:"贵港市",children:[{value:450802,text:"港北区"},{value:450803,text:"港南区"},{value:450804,text:"覃塘区"},{value:450821,text:"平南县"},{value:450881,text:"桂平市"},{value:450882,text:"其它区"}]},{value:450900,text:"玉林市",children:[{value:450902,text:"玉州区"},{value:450903,text:"福绵区"},{value:450921,text:"容县"},{value:450922,text:"陆川县"},{value:450923,text:"博白县"},{value:450924,text:"兴业县"},{value:450981,text:"北流市"},{value:450982,text:"其它区"}]},{value:451e3,text:"百色市",children:[{value:451002,text:"右江区"},{value:451021,text:"田阳县"},{value:451022,text:"田东县"},{value:451023,text:"平果县"},{value:451024,text:"德保县"},{value:451025,text:"靖西县"},{value:451026,text:"那坡县"},{value:451027,text:"凌云县"},{value:451028,text:"乐业县"},{value:451029,text:"田林县"},{value:451030,text:"西林县"},{value:451031,text:"隆林各族自治县"},{value:451032,text:"其它区"}]},{value:451100,text:"贺州市",children:[{value:451102,text:"八步区"},{value:451119,text:"平桂管理区"},{value:451121,text:"昭平县"},{value:451122,text:"钟山县"},{value:451123,text:"富川瑶族自治县"},{value:451124,text:"其它区"}]},{value:451200,text:"河池市",children:[{value:451202,text:"金城江区"},{value:451221,text:"南丹县"},{value:451222,text:"天峨县"},{value:451223,text:"凤山县"},{value:451224,text:"东兰县"},{value:451225,text:"罗城仫佬族自治县"},{value:451226,text:"环江毛南族自治县"},{value:451227,text:"巴马瑶族自治县"},{value:451228,text:"都安瑶族自治县"},{value:451229,text:"大化瑶族自治县"},{value:451281,text:"宜州市"},{value:451282,text:"其它区"}]},{value:451300,text:"来宾市",children:[{value:451302,text:"兴宾区"},{value:451321,text:"忻城县"},{value:451322,text:"象州县"},{value:451323,text:"武宣县"},{value:451324,text:"金秀瑶族自治县"},{value:451381,text:"合山市"},{value:451382,text:"其它区"}]},{value:451400,text:"崇左市",children:[{value:451402,text:"江州区"},{value:451421,text:"扶绥县"},{value:451422,text:"宁明县"},{value:451423,text:"龙州县"},{value:451424,text:"大新县"},{value:451425,text:"天等县"},{value:451481,text:"凭祥市"},{value:451482,text:"其它区"}]}]},{value:46e4,text:"海南",children:[{value:460100,text:"海口市",children:[{value:460105,text:"秀英区"},{value:460106,text:"龙华区"},{value:460107,text:"琼山区"},{value:460108,text:"美兰区"},{value:460109,text:"其它区"}]},{value:460200,text:"三亚市",children:[{value:460201100,text:"海棠湾镇"},{value:460201101,text:"吉阳镇"},{value:460201102,text:"凤凰镇"},{value:460201103,text:"崖城镇"},{value:460201104,text:"天涯镇"},{value:460201105,text:"育才镇"},{value:460201400,text:"国营南田农场"},{value:460201401,text:"国营南新农场"},{value:460201403,text:"国营立才农场"},{value:460201404,text:"国营南滨农场"},{value:460201451,text:"河西区街道"},{value:460201452,text:"河东区街道"}]},{value:460300,text:"三沙市",children:[{value:460321,text:"西沙群岛"},{value:460322,text:"南沙群岛"},{value:460323,text:"中沙群岛的岛礁及其海域"}]},{value:469001,text:"五指山市",children:[{value:469001100,text:"通什镇"},{value:469001101,text:"南圣镇"},{value:469001102,text:"毛阳镇"},{value:469001103,text:"番阳镇"},{value:469001200,text:"畅好乡"},{value:469001201,text:"毛道乡"},{value:469001202,text:"水满乡"},{value:469001400,text:"国营畅好农场"}]},{value:469002,text:"琼海市",children:[{value:469002100,text:"嘉积镇"},{value:469002101,text:"万泉镇"},{value:469002102,text:"石壁镇"},{value:469002103,text:"中原镇"},{value:469002104,text:"博鳌镇"},{value:469002105,text:"阳江镇"},{value:469002106,text:"龙江镇"},{value:469002107,text:"潭门镇"},{value:469002108,text:"塔洋镇"},{value:469002109,text:"长坡镇"},{value:469002110,text:"大路镇"},{value:469002111,text:"会山镇"},{value:469002400,text:"国营东太农场"},{value:469002402,text:"国营东红农场"},{value:469002403,text:"国营东升农场"},{value:469002500,text:"彬村山华侨农场"}]},{value:469003,text:"儋州市",children:[{value:469003100,text:"那大镇"},{value:469003101,text:"和庆镇"},{value:469003102,text:"南丰镇"},{value:469003103,text:"大成镇"},{value:469003104,text:"雅星镇"},{value:469003105,text:"兰洋镇"},{value:469003106,text:"光村镇"},{value:469003107,text:"木棠镇"},{value:469003108,text:"海头镇"},{value:469003109,text:"峨蔓镇"},{value:469003110,text:"三都镇"},{value:469003111,text:"王五镇"},{value:469003112,text:"白马井镇"},{value:469003113,text:"中和镇"},{value:469003114,text:"排浦镇"},{value:469003115,text:"东成镇"},{value:469003116,text:"新州镇"},{value:469003400,text:"国营西培农场"},{value:469003404,text:"国营西联农场"},{value:469003405,text:"国营蓝洋农场"},{value:469003407,text:"国营八一农场"},{value:469003499,text:"洋浦经济开发区"},{value:469003500,text:"华南热作学院"}]},{value:469005,text:"文昌市",children:[{value:469005100,text:"文城镇"},{value:469005101,text:"重兴镇"},{value:469005102,text:"蓬莱镇"},{value:469005103,text:"会文镇"},{value:469005104,text:"东路镇"},{value:469005105,text:"潭牛镇"},{value:469005106,text:"东阁镇"},{value:469005107,text:"文教镇"},{value:469005108,text:"东郊镇"},{value:469005109,text:"龙楼镇"},{value:469005110,text:"昌洒镇"},{value:469005111,text:"翁田镇"},{value:469005112,text:"抱罗镇"},{value:469005113,text:"冯坡镇"},{value:469005114,text:"锦山镇"},{value:469005115,text:"铺前镇"},{value:469005116,text:"公坡镇"},{value:469005400,text:"国营东路农场"},{value:469005401,text:"国营南阳农场"},{value:469005402,text:"国营罗豆农场"}]},{value:469006,text:"万宁市",children:[{value:469006100,text:"万城镇"},{value:469006101,text:"龙滚镇"},{value:469006102,text:"和乐镇"},{value:469006103,text:"后安镇"},{value:469006104,text:"大茂镇"},{value:469006105,text:"东澳镇"},{value:469006106,text:"礼纪镇"},{value:469006107,text:"长丰镇"},{value:469006108,text:"山根镇"},{value:469006109,text:"北大镇"},{value:469006110,text:"南桥镇"},{value:469006111,text:"三更罗镇"},{value:469006400,text:"国营东兴农场"},{value:469006401,text:"国营东和农场"},{value:469006404,text:"国营新中农场"},{value:469006500,text:"兴隆华侨农场"},{value:469006501,text:"地方国营六连林场"}]},{value:469007,text:"东方市",children:[{value:469007100,text:"八所镇"},{value:469007101,text:"东河镇"},{value:469007102,text:"大田镇"},{value:469007103,text:"感城镇"},{value:469007104,text:"板桥镇"},{value:469007105,text:"三家镇"},{value:469007106,text:"四更镇"},{value:469007107,text:"新龙镇"},{value:469007200,text:"天安乡"},{value:469007201,text:"江边乡"},{value:469007400,text:"国营广坝农场"},{value:469007500,text:"东方华侨农场"}]},{value:469025,text:"定安县",children:[{value:469021100,text:"定城镇"},{value:469021101,text:"新竹镇"},{value:469021102,text:"龙湖镇"},{value:469021103,text:"黄竹镇"},{value:469021104,text:"雷鸣镇"},{value:469021105,text:"龙门镇"},{value:469021106,text:"龙河镇"},{value:469021107,text:"岭口镇"},{value:469021108,text:"翰林镇"},{value:469021109,text:"富文镇"},{value:469021400,text:"国营中瑞农场"},{value:469021401,text:"国营南海农场"},{value:469021402,text:"国营金鸡岭农场"}]},{value:469026,text:"屯昌县",children:[{value:469022100,text:"屯城镇"},{value:469022101,text:"新兴镇"},{value:469022102,text:"枫木镇"},{value:469022103,text:"乌坡镇"},{value:469022104,text:"南吕镇"},{value:469022105,text:"南坤镇"},{value:469022106,text:"坡心镇"},{value:469022107,text:"西昌镇"},{value:469022400,text:"国营中建农场"},{value:469022401,text:"国营中坤农场"}]},{value:469027,text:"澄迈县",children:[{value:469023100,text:"金江镇"},{value:469023101,text:"老城镇"},{value:469023102,text:"瑞溪镇"},{value:469023103,text:"永发镇"},{value:469023104,text:"加乐镇"},{value:469023105,text:"文儒镇"},{value:469023106,text:"中兴镇"},{value:469023107,text:"仁兴镇"},{value:469023108,text:"福山镇"},{value:469023109,text:"桥头镇"},{value:469023110,text:"大丰镇"},{value:469023400,text:"国营红光农场"},{value:469023401,text:"国营红岗农场"},{value:469023402,text:"国营西达农场"},{value:469023403,text:"国营昆仑农场"},{value:469023404,text:"国营和岭农场"},{value:469023405,text:"国营金安农场"}]},{value:469028,text:"临高县",children:[{value:469024100,text:"临城镇"},{value:469024101,text:"波莲镇"},{value:469024102,text:"东英镇"},{value:469024103,text:"博厚镇"},{value:469024104,text:"皇桐镇"},{value:469024105,text:"多文镇"},{value:469024106,text:"和舍镇"},{value:469024107,text:"南宝镇"},{value:469024108,text:"新盈镇"},{value:469024109,text:"调楼镇"},{value:469024400,text:"国营红华农场"},{value:469024401,text:"国营加来农场"}]},{value:469030,text:"白沙黎族自治县",children:[{value:469025100,text:"牙叉镇"},{value:469025101,text:"七坊镇"},{value:469025102,text:"邦溪镇"},{value:469025103,text:"打安镇"},{value:469025200,text:"细水乡"},{value:469025201,text:"元门乡"},{value:469025202,text:"南开乡"},{value:469025203,text:"阜龙乡"},{value:469025204,text:"青松乡"},{value:469025205,text:"金波乡"},{value:469025206,text:"荣邦乡"},{value:469025401,text:"国营白沙农场"},{value:469025404,text:"国营龙江农场"},{value:469025408,text:"国营邦溪农场"}]},{value:469031,text:"昌江黎族自治县",children:[{value:469026100,text:"石碌镇"},{value:469026101,text:"叉河镇"},{value:469026102,text:"十月田镇"},{value:469026103,text:"乌烈镇"},{value:469026104,text:"昌化镇"},{value:469026105,text:"海尾镇"},{value:469026106,text:"七叉镇"},{value:469026200,text:"王下乡"},{value:469026401,text:"国营红林农场"},{value:469026500,text:"国营霸王岭林场"},{value:469026501,text:"海南矿业联合有限公司"}]},{value:469033,text:"乐东黎族自治县",children:[{value:469027100,text:"抱由镇"},{value:469027101,text:"万冲镇"},{value:469027102,text:"大安镇"},{value:469027103,text:"志仲镇"},{value:469027104,text:"千家镇"},{value:469027105,text:"九所镇"},{value:469027106,text:"利国镇"},{value:469027107,text:"黄流镇"},{value:469027108,text:"佛罗镇"},{value:469027109,text:"尖峰镇"},{value:469027110,text:"莺歌海镇"},{value:469027401,text:"国营山荣农场"},{value:469027402,text:"国营乐光农场"},{value:469027405,text:"国营保国农场"},{value:469027500,text:"国营尖峰岭林业公司"},{value:469027501,text:"国营莺歌海盐场"}]},{value:469034,text:"陵水黎族自治县",children:[{value:469028100,text:"椰林镇"},{value:469028101,text:"光坡镇"},{value:469028102,text:"三才镇"},{value:469028103,text:"英州镇"},{value:469028104,text:"隆广镇"},{value:469028105,text:"文罗镇"},{value:469028106,text:"本号镇"},{value:469028107,text:"新村镇"},{value:469028108,text:"黎安镇"},{value:469028200,text:"提蒙乡"},{value:469028201,text:"群英乡"},{value:469028400,text:"国营岭门农场"},{value:469028401,text:"国营南平农场"},{value:469028500,text:"国营吊罗山林业公司"}]},{value:469035,text:"保亭黎族苗族自治县",children:[{value:469029100,text:"保城镇"},{value:469029101,text:"什玲镇"},{value:469029102,text:"加茂镇"},{value:469029103,text:"响水镇"},{value:469029104,text:"新政镇"},{value:469029105,text:"三道镇"},{value:469029200,text:"六弓乡"},{value:469029201,text:"南林乡"},{value:469029202,text:"毛感乡"},{value:469029401,text:"国营新星农场"},{value:469029402,text:"海南保亭热带作物研究所"},{value:469029403,text:"国营金江农场"},{value:469029405,text:"国营三道农场"}]},{value:469036,text:"琼中黎族苗族自治县",children:[{value:469030100,text:"营根镇"},{value:469030101,text:"湾岭镇"},{value:469030102,text:"黎母山镇"},{value:469030103,text:"和平镇"},{value:469030104,text:"长征镇"},{value:469030105,text:"红毛镇"},{value:469030106,text:"中平镇"},{value:469030200,text:"吊罗山乡"},{value:469030201,text:"上安乡"},{value:469030202,text:"什运乡"},{value:469030402,text:"国营阳江农场"},{value:469030403,text:"国营乌石农场"},{value:469030406,text:"国营加钗农场"},{value:469030407,text:"国营长征农场"},{value:469030500,text:"国营黎母山林业公司"}]},{value:469037,text:"西沙群岛",children:[]},{value:469038,text:"南沙群岛",children:[]},{value:469039,text:"中沙群岛的岛礁及其海域",children:[]}]},{value:5e5,text:"重庆",children:[{value:500100,text:"重庆市",children:[{value:500101,text:"万州区"},{value:500102,text:"涪陵区"},{value:500103,text:"渝中区"},{value:500104,text:"大渡口区"},{value:500105,text:"江北区"},{value:500106,text:"沙坪坝区"},{value:500107,text:"九龙坡区"},{value:500108,text:"南岸区"},{value:500109,text:"北碚区"},{value:500110,text:"万盛区"},{value:500111,text:"双桥区"},{value:500112,text:"渝北区"},{value:500113,text:"巴南区"},{value:500114,text:"黔江区"},{value:500115,text:"长寿区"},{value:500222,text:"綦江区"},{value:500223,text:"潼南县"},{value:500224,text:"铜梁区"},{value:500225,text:"大足区"},{value:500226,text:"荣昌县"},{value:500227,text:"璧山区"},{value:500228,text:"梁平县"},{value:500229,text:"城口县"},{value:500230,text:"丰都县"},{value:500231,text:"垫江县"},{value:500232,text:"武隆县"},{value:500233,text:"忠县"},{value:500234,text:"开县"},{value:500235,text:"云阳县"},{value:500236,text:"奉节县"},{value:500237,text:"巫山县"},{value:500238,text:"巫溪县"},{value:500240,text:"石柱土家族自治县"},{value:500241,text:"秀山土家族苗族自治县"},{value:500242,text:"酉阳土家族苗族自治县"},{value:500243,text:"彭水苗族土家族自治县"},{value:500381,text:"江津区"},{value:500382,text:"合川区"},{value:500383,text:"永川区"},{value:500384,text:"南川区"},{value:500385,text:"其它区"}]}]},{value:51e4,text:"四川",children:[{value:510100,text:"成都市",children:[{value:510104,text:"锦江区"},{value:510105,text:"青羊区"},{value:510106,text:"金牛区"},{value:510107,text:"武侯区"},{value:510108,text:"成华区"},{value:510112,text:"龙泉驿区"},{value:510113,text:"青白江区"},{value:510114,text:"新都区"},{value:510115,text:"温江区"},{value:510121,text:"金堂县"},{value:510122,text:"双流县"},{value:510124,text:"郫县"},{value:510129,text:"大邑县"},{value:510131,text:"蒲江县"},{value:510132,text:"新津县"},{value:510181,text:"都江堰市"},{value:510182,text:"彭州市"},{value:510183,text:"邛崃市"},{value:510184,text:"崇州市"},{value:510185,text:"其它区"}]},{value:510300,text:"自贡市",children:[{value:510302,text:"自流井区"},{value:510303,text:"贡井区"},{value:510304,text:"大安区"},{value:510311,text:"沿滩区"},{value:510321,text:"荣县"},{value:510322,text:"富顺县"},{value:510323,text:"其它区"}]},{value:510400,text:"攀枝花市",children:[{value:510402,text:"东区"},{value:510403,text:"西区"},{value:510411,text:"仁和区"},{value:510421,text:"米易县"},{value:510422,text:"盐边县"},{value:510423,text:"其它区"}]},{value:510500,text:"泸州市",children:[{value:510502,text:"江阳区"},{value:510503,text:"纳溪区"},{value:510504,text:"龙马潭区"},{value:510521,text:"泸县"},{value:510522,text:"合江县"},{value:510524,text:"叙永县"},{value:510525,text:"古蔺县"},{value:510526,text:"其它区"}]},{value:510600,text:"德阳市",children:[{value:510603,text:"旌阳区"},{value:510623,text:"中江县"},{value:510626,text:"罗江县"},{value:510681,text:"广汉市"},{value:510682,text:"什邡市"},{value:510683,text:"绵竹市"},{value:510684,text:"其它区"}]},{value:510700,text:"绵阳市",children:[{value:510703,text:"涪城区"},{value:510704,text:"游仙区"},{value:510722,text:"三台县"},{value:510723,text:"盐亭县"},{value:510724,text:"安县"},{value:510725,text:"梓潼县"},{value:510726,text:"北川羌族自治县"},{value:510727,text:"平武县"},{value:510751,text:"高新区"},{value:510781,text:"江油市"},{value:510782,text:"其它区"}]},{value:510800,text:"广元市",children:[{value:510802,text:"利州区"},{value:510811,text:"昭化区"},{value:510812,text:"朝天区"},{value:510821,text:"旺苍县"},{value:510822,text:"青川县"},{value:510823,text:"剑阁县"},{value:510824,text:"苍溪县"},{value:510825,text:"其它区"}]},{value:510900,text:"遂宁市",children:[{value:510903,text:"船山区"},{value:510904,text:"安居区"},{value:510921,text:"蓬溪县"},{value:510922,text:"射洪县"},{value:510923,text:"大英县"},{value:510924,text:"其它区"}]},{value:511e3,text:"内江市",children:[{value:511002,text:"市中区"},{value:511011,text:"东兴区"},{value:511024,text:"威远县"},{value:511025,text:"资中县"},{value:511028,text:"隆昌县"},{value:511029,text:"其它区"}]},{value:511100,text:"乐山市",children:[{value:511102,text:"市中区"},{value:511111,text:"沙湾区"},{value:511112,text:"五通桥区"},{value:511113,text:"金口河区"},{value:511123,text:"犍为县"},{value:511124,text:"井研县"},{value:511126,text:"夹江县"},{value:511129,text:"沐川县"},{value:511132,text:"峨边彝族自治县"},{value:511133,text:"马边彝族自治县"},{value:511181,text:"峨眉山市"},{value:511182,text:"其它区"}]},{value:511300,text:"南充市",children:[{value:511302,text:"顺庆区"},{value:511303,text:"高坪区"},{value:511304,text:"嘉陵区"},{value:511321,text:"南部县"},{value:511322,text:"营山县"},{value:511323,text:"蓬安县"},{value:511324,text:"仪陇县"},{value:511325,text:"西充县"},{value:511381,text:"阆中市"},{value:511382,text:"其它区"}]},{value:511400,text:"眉山市",children:[{value:511402,text:"东坡区"},{value:511421,text:"仁寿县"},{value:511422,text:"彭山区"},{value:511423,text:"洪雅县"},{value:511424,text:"丹棱县"},{value:511425,text:"青神县"},{value:511426,text:"其它区"}]},{value:511500,text:"宜宾市",children:[{value:511502,text:"翠屏区"},{value:511521,text:"宜宾县"},{value:511522,text:"南溪区"},{value:511523,text:"江安县"},{value:511524,text:"长宁县"},{value:511525,text:"高县"},{value:511526,text:"珙县"},{value:511527,text:"筠连县"},{value:511528,text:"兴文县"},{value:511529,text:"屏山县"},{value:511530,text:"其它区"}]},{value:511600,text:"广安市",children:[{value:511602,text:"广安区"},{value:511603,text:"前锋区"},{value:511621,text:"岳池县"},{value:511622,text:"武胜县"},{value:511623,text:"邻水县"},{value:511681,text:"华蓥市"},{value:511682,text:"市辖区"},{value:511683,text:"其它区"}]},{value:511700,text:"达州市",children:[{value:511702,text:"通川区"},{value:511721,text:"达川区"},{value:511722,text:"宣汉县"},{value:511723,text:"开江县"},{value:511724,text:"大竹县"},{value:511725,text:"渠县"},{value:511781,text:"万源市"},{value:511782,text:"其它区"}]},{value:511800,text:"雅安市",children:[{value:511802,text:"雨城区"},{value:511821,text:"名山区"},{value:511822,text:"荥经县"},{value:511823,text:"汉源县"},{value:511824,text:"石棉县"},{value:511825,text:"天全县"},{value:511826,text:"芦山县"},{value:511827,text:"宝兴县"},{value:511828,text:"其它区"}]},{value:511900,text:"巴中市",children:[{value:511902,text:"巴州区"},{value:511903,text:"恩阳区"},{value:511921,text:"通江县"},{value:511922,text:"南江县"},{value:511923,text:"平昌县"},{value:511924,text:"其它区"}]},{value:512e3,text:"资阳市",children:[{value:512002,text:"雁江区"},{value:512021,text:"安岳县"},{value:512022,text:"乐至县"},{value:512081,text:"简阳市"},{value:512082,text:"其它区"}]},{value:513200,text:"阿坝藏族羌族自治州",children:[{value:513221,text:"汶川县"},{value:513222,text:"理县"},{value:513223,text:"茂县"},{value:513224,text:"松潘县"},{value:513225,text:"九寨沟县"},{value:513226,text:"金川县"},{value:513227,text:"小金县"},{value:513228,text:"黑水县"},{value:513229,text:"马尔康县"},{value:513230,text:"壤塘县"},{value:513231,text:"阿坝县"},{value:513232,text:"若尔盖县"},{value:513233,text:"红原县"},{value:513234,text:"其它区"}]},{value:513300,text:"甘孜藏族自治州",children:[{value:513321,text:"康定市"},{value:513322,text:"泸定县"},{value:513323,text:"丹巴县"},{value:513324,text:"九龙县"},{value:513325,text:"雅江县"},{value:513326,text:"道孚县"},{value:513327,text:"炉霍县"},{value:513328,text:"甘孜县"},{value:513329,text:"新龙县"},{value:513330,text:"德格县"},{value:513331,text:"白玉县"},{value:513332,text:"石渠县"},{value:513333,text:"色达县"},{value:513334,text:"理塘县"},{value:513335,text:"巴塘县"},{value:513336,text:"乡城县"},{value:513337,text:"稻城县"},{value:513338,text:"得荣县"},{value:513339,text:"其它区"}]},{value:513400,text:"凉山彝族自治州",children:[{value:513401,text:"西昌市"},{value:513422,text:"木里藏族自治县"},{value:513423,text:"盐源县"},{value:513424,text:"德昌县"},{value:513425,text:"会理县"},{value:513426,text:"会东县"},{value:513427,text:"宁南县"},{value:513428,text:"普格县"},{value:513429,text:"布拖县"},{value:513430,text:"金阳县"},{value:513431,text:"昭觉县"},{value:513432,text:"喜德县"},{value:513433,text:"冕宁县"},{value:513434,text:"越西县"},{value:513435,text:"甘洛县"},{value:513436,text:"美姑县"},{value:513437,text:"雷波县"},{value:513438,text:"其它区"}]}]},{value:52e4,text:"贵州",children:[{value:520100,text:"贵阳市",children:[{value:520102,text:"南明区"},{value:520103,text:"云岩区"},{value:520111,text:"花溪区"},{value:520112,text:"乌当区"},{value:520113,text:"白云区"},{value:520114,text:"小河区"},{value:520121,text:"开阳县"},{value:520122,text:"息烽县"},{value:520123,text:"修文县"},{value:520151,text:"观山湖区"},{value:520181,text:"清镇市"},{value:520182,text:"其它区"}]},{value:520200,text:"六盘水市",children:[{value:520201,text:"钟山区"},{value:520203,text:"六枝特区"},{value:520221,text:"水城县"},{value:520222,text:"盘县"},{value:520223,text:"其它区"}]},{value:520300,text:"遵义市",children:[{value:520302,text:"红花岗区"},{value:520303,text:"汇川区"},{value:520321,text:"遵义县"},{value:520322,text:"桐梓县"},{value:520323,text:"绥阳县"},{value:520324,text:"正安县"},{value:520325,text:"道真仡佬族苗族自治县"},{value:520326,text:"务川仡佬族苗族自治县"},{value:520327,text:"凤冈县"},{value:520328,text:"湄潭县"},{value:520329,text:"余庆县"},{value:520330,text:"习水县"},{value:520381,text:"赤水市"},{value:520382,text:"仁怀市"},{value:520383,text:"其它区"}]},{value:520400,text:"安顺市",children:[{value:520402,text:"西秀区"},{value:520421,text:"平坝区"},{value:520422,text:"普定县"},{value:520423,text:"镇宁布依族苗族自治县"},{value:520424,text:"关岭布依族苗族自治县"},{value:520425,text:"紫云苗族布依族自治县"},{value:520426,text:"其它区"}]},{value:522200,text:"铜仁市",children:[{value:522201,text:"碧江区"},{value:522222,text:"江口县"},{value:522223,text:"玉屏侗族自治县"},{value:522224,text:"石阡县"},{value:522225,text:"思南县"},{value:522226,text:"印江土家族苗族自治县"},{value:522227,text:"德江县"},{value:522228,text:"沿河土家族自治县"},{value:522229,text:"松桃苗族自治县"},{value:522230,text:"万山区"},{value:522231,text:"其它区"}]},{value:522300,text:"黔西南布依族苗族自治州",children:[{value:522301,text:"兴义市"},{value:522322,text:"兴仁县"},{value:522323,text:"普安县"},{value:522324,text:"晴隆县"},{value:522325,text:"贞丰县"},{value:522326,text:"望谟县"},{value:522327,text:"册亨县"},{value:522328,text:"安龙县"},{value:522329,text:"其它区"}]},{value:522400,text:"毕节市",children:[{value:522401,text:"七星关区"},{value:522422,text:"大方县"},{value:522423,text:"黔西县"},{value:522424,text:"金沙县"},{value:522425,text:"织金县"},{value:522426,text:"纳雍县"},{value:522427,text:"威宁彝族回族苗族自治县"},{value:522428,text:"赫章县"},{value:522429,text:"其它区"}]},{value:522600,text:"黔东南苗族侗族自治州",children:[{value:522601,text:"凯里市"},{value:522622,text:"黄平县"},{value:522623,text:"施秉县"},{value:522624,text:"三穗县"},{value:522625,text:"镇远县"},{value:522626,text:"岑巩县"},{value:522627,text:"天柱县"},{value:522628,text:"锦屏县"},{value:522629,text:"剑河县"},{value:522630,text:"台江县"},{value:522631,text:"黎平县"},{value:522632,text:"榕江县"},{value:522633,text:"从江县"},{value:522634,text:"雷山县"},{value:522635,text:"麻江县"},{value:522636,text:"丹寨县"},{value:522637,text:"其它区"}]},{value:522700,text:"黔南布依族苗族自治州",children:[{value:522701,text:"都匀市"},{value:522702,text:"福泉市"},{value:522722,text:"荔波县"},{value:522723,text:"贵定县"},{value:522725,text:"瓮安县"},{value:522726,text:"独山县"},{value:522727,text:"平塘县"},{value:522728,text:"罗甸县"},{value:522729,text:"长顺县"},{value:522730,text:"龙里县"},{value:522731,text:"惠水县"},{value:522732,text:"三都水族自治县"},{value:522733,text:"其它区"}]}]},{value:53e4,text:"云南",children:[{value:530100,text:"昆明市",children:[{value:530102,text:"五华区"},{value:530103,text:"盘龙区"},{value:530111,text:"官渡区"},{value:530112,text:"西山区"},{value:530113,text:"东川区"},{value:530121,text:"呈贡区"},{value:530122,text:"晋宁县"},{value:530124,text:"富民县"},{value:530125,text:"宜良县"},{value:530126,text:"石林彝族自治县"},{value:530127,text:"嵩明县"},{value:530128,text:"禄劝彝族苗族自治县"},{value:530129,text:"寻甸回族彝族自治县"},{value:530181,text:"安宁市"},{value:530182,text:"其它区"}]},{value:530300,text:"曲靖市",children:[{value:530302,text:"麒麟区"},{value:530321,text:"马龙县"},{value:530322,text:"陆良县"},{value:530323,text:"师宗县"},{value:530324,text:"罗平县"},{value:530325,text:"富源县"},{value:530326,text:"会泽县"},{value:530328,text:"沾益县"},{value:530381,text:"宣威市"},{value:530382,text:"其它区"}]},{value:530400,text:"玉溪市",children:[{value:530402,text:"红塔区"},{value:530421,text:"江川县"},{value:530422,text:"澄江县"},{value:530423,text:"通海县"},{value:530424,text:"华宁县"},{value:530425,text:"易门县"},{value:530426,text:"峨山彝族自治县"},{value:530427,text:"新平彝族傣族自治县"},{value:530428,text:"元江哈尼族彝族傣族自治县"},{value:530429,text:"其它区"}]},{value:530500,text:"保山市",children:[{value:530502,text:"隆阳区"},{value:530521,text:"施甸县"},{value:530522,text:"腾冲县"},{value:530523,text:"龙陵县"},{value:530524,text:"昌宁县"},{value:530525,text:"其它区"}]},{value:530600,text:"昭通市",children:[{value:530602,text:"昭阳区"},{value:530621,text:"鲁甸县"},{value:530622,text:"巧家县"},{value:530623,text:"盐津县"},{value:530624,text:"大关县"},{value:530625,text:"永善县"},{value:530626,text:"绥江县"},{value:530627,text:"镇雄县"},{value:530628,text:"彝良县"},{value:530629,text:"威信县"},{value:530630,text:"水富县"},{value:530631,text:"其它区"}]},{value:530700,text:"丽江市",children:[{value:530702,text:"古城区"},{value:530721,text:"玉龙纳西族自治县"},{value:530722,text:"永胜县"},{value:530723,text:"华坪县"},{value:530724,text:"宁蒗彝族自治县"},{value:530725,text:"其它区"}]},{value:530800,text:"普洱市",children:[{value:530802,text:"思茅区"},{value:530821,text:"宁洱哈尼族彝族自治县"},{value:530822,text:"墨江哈尼族自治县"},{value:530823,text:"景东彝族自治县"},{value:530824,text:"景谷傣族彝族自治县"},{value:530825,text:"镇沅彝族哈尼族拉祜族自治县"},{value:530826,text:"江城哈尼族彝族自治县"},{value:530827,text:"孟连傣族拉祜族佤族自治县"},{value:530828,text:"澜沧拉祜族自治县"},{value:530829,text:"西盟佤族自治县"},{value:530830,text:"其它区"}]},{value:530900,text:"临沧市",children:[{value:530902,text:"临翔区"},{value:530921,text:"凤庆县"},{value:530922,text:"云县"},{value:530923,text:"永德县"},{value:530924,text:"镇康县"},{value:530925,text:"双江拉祜族佤族布朗族傣族自治县"},{value:530926,text:"耿马傣族佤族自治县"},{value:530927,text:"沧源佤族自治县"},{value:530928,text:"其它区"}]},{value:532300,text:"楚雄彝族自治州",children:[{value:532301,text:"楚雄市"},{value:532322,text:"双柏县"},{value:532323,text:"牟定县"},{value:532324,text:"南华县"},{value:532325,text:"姚安县"},{value:532326,text:"大姚县"},{value:532327,text:"永仁县"},{value:532328,text:"元谋县"},{value:532329,text:"武定县"},{value:532331,text:"禄丰县"},{value:532332,text:"其它区"}]},{value:532500,text:"红河哈尼族彝族自治州",children:[{value:532501,text:"个旧市"},{value:532502,text:"开远市"},{value:532522,text:"蒙自市"},{value:532523,text:"屏边苗族自治县"},{value:532524,text:"建水县"},{value:532525,text:"石屏县"},{value:532526,text:"弥勒市"},{value:532527,text:"泸西县"},{value:532528,text:"元阳县"},{value:532529,text:"红河县"},{value:532530,text:"金平苗族瑶族傣族自治县"},{value:532531,text:"绿春县"},{value:532532,text:"河口瑶族自治县"},{value:532533,text:"其它区"}]},{value:532600,text:"文山壮族苗族自治州",children:[{value:532621,text:"文山市"},{value:532622,text:"砚山县"},{value:532623,text:"西畴县"},{value:532624,text:"麻栗坡县"},{value:532625,text:"马关县"},{value:532626,text:"丘北县"},{value:532627,text:"广南县"},{value:532628,text:"富宁县"},{value:532629,text:"其它区"}]},{value:532800,text:"西双版纳傣族自治州",children:[{value:532801,text:"景洪市"},{value:532822,text:"勐海县"},{value:532823,text:"勐腊县"},{value:532824,text:"其它区"}]},{value:532900,text:"大理白族自治州",children:[{value:532901,text:"大理市"},{value:532922,text:"漾濞彝族自治县"},{value:532923,text:"祥云县"},{value:532924,text:"宾川县"},{value:532925,text:"弥渡县"},{value:532926,text:"南涧彝族自治县"},{value:532927,text:"巍山彝族回族自治县"},{value:532928,text:"永平县"},{value:532929,text:"云龙县"},{value:532930,text:"洱源县"},{value:532931,text:"剑川县"},{value:532932,text:"鹤庆县"},{value:532933,text:"其它区"}]},{value:533100,text:"德宏傣族景颇族自治州",children:[{value:533102,text:"瑞丽市"},{value:533103,text:"芒市"},{value:533122,text:"梁河县"},{value:533123,text:"盈江县"},{value:533124,text:"陇川县"},{value:533125,text:"其它区"}]},{value:533300,text:"怒江傈僳族自治州",children:[{value:533321,text:"泸水县"},{value:533323,text:"福贡县"},{value:533324,text:"贡山独龙族怒族自治县"},{value:533325,text:"兰坪白族普米族自治县"},{value:533326,text:"其它区"}]},{value:533400,text:"迪庆藏族自治州",children:[{value:533421,text:"香格里拉市"},{value:533422,text:"德钦县"},{value:533423,text:"维西傈僳族自治县"},{value:533424,text:"其它区"}]}]},{value:54e4,text:"西藏",children:[{value:540100,text:"拉萨市",children:[{value:540102,text:"城关区"},{value:540121,text:"林周县"},{value:540122,text:"当雄县"},{value:540123,text:"尼木县"},{value:540124,text:"曲水县"},{value:540125,text:"堆龙德庆县"},{value:540126,text:"达孜县"},{value:540127,text:"墨竹工卡县"},{value:540128,text:"其它区"}]},{value:542100,text:"昌都市",children:[{value:542121,text:"卡若区"},{value:542122,text:"江达县"},{value:542123,text:"贡觉县"},{value:542124,text:"类乌齐县"},{value:542125,text:"丁青县"},{value:542126,text:"察雅县"},{value:542127,text:"八宿县"},{value:542128,text:"左贡县"},{value:542129,text:"芒康县"},{value:542132,text:"洛隆县"},{value:542133,text:"边坝县"},{value:542134,text:"其它区"}]},{value:542200,text:"山南地区",children:[{value:542221,text:"乃东县"},{value:542222,text:"扎囊县"},{value:542223,text:"贡嘎县"},{value:542224,text:"桑日县"},{value:542225,text:"琼结县"},{value:542226,text:"曲松县"},{value:542227,text:"措美县"},{value:542228,text:"洛扎县"},{value:542229,text:"加查县"},{value:542231,text:"隆子县"},{value:542232,text:"错那县"},{value:542233,text:"浪卡子县"},{value:542234,text:"其它区"}]},{value:542300,text:"日喀则市",children:[{value:542301,text:"桑珠孜区"},{value:542322,text:"南木林县"},{value:542323,text:"江孜县"},{value:542324,text:"定日县"},{value:542325,text:"萨迦县"},{value:542326,text:"拉孜县"},{value:542327,text:"昂仁县"},{value:542328,text:"谢通门县"},{value:542329,text:"白朗县"},{value:542330,text:"仁布县"},{value:542331,text:"康马县"},{value:542332,text:"定结县"},{value:542333,text:"仲巴县"},{value:542334,text:"亚东县"},{value:542335,text:"吉隆县"},{value:542336,text:"聂拉木县"},{value:542337,text:"萨嘎县"},{value:542338,text:"岗巴县"},{value:542339,text:"其它区"}]},{value:542400,text:"那曲地区",children:[{value:542421,text:"那曲县"},{value:542422,text:"嘉黎县"},{value:542423,text:"比如县"},{value:542424,text:"聂荣县"},{value:542425,text:"安多县"},{value:542426,text:"申扎县"},{value:542427,text:"索县"},{value:542428,text:"班戈县"},{value:542429,text:"巴青县"},{value:542430,text:"尼玛县"},{value:542431,text:"其它区"},{value:542432,text:"双湖县"}]},{value:542500,text:"阿里地区",children:[{value:542521,text:"普兰县"},{value:542522,text:"札达县"},{value:542523,text:"噶尔县"},{value:542524,text:"日土县"},{value:542525,text:"革吉县"},{value:542526,text:"改则县"},{value:542527,text:"措勤县"},{value:542528,text:"其它区"}]},{value:542600,text:"林芝市",children:[{value:542621,text:"巴宜区"},{value:542622,text:"工布江达县"},{value:542623,text:"米林县"},{value:542624,text:"墨脱县"},{value:542625,text:"波密县"},{value:542626,text:"察隅县"},{value:542627,text:"朗县"},{value:542628,text:"其它区"}]}]},{value:61e4,text:"陕西",children:[{value:610100,text:"西安市",children:[{value:610102,text:"新城区"},{value:610103,text:"碑林区"},{value:610104,text:"莲湖区"},{value:610111,text:"灞桥区"},{value:610112,text:"未央区"},{value:610113,text:"雁塔区"},{value:610114,text:"阎良区"},{value:610115,text:"临潼区"},{value:610116,text:"长安区"},{value:610122,text:"蓝田县"},{value:610124,text:"周至县"},{value:610125,text:"户县"},{value:610126,text:"高陵区"},{value:610127,text:"其它区"}]},{value:610200,text:"铜川市",children:[{value:610202,text:"王益区"},{value:610203,text:"印台区"},{value:610204,text:"耀州区"},{value:610222,text:"宜君县"},{value:610223,text:"其它区"}]},{value:610300,text:"宝鸡市",children:[{value:610302,text:"渭滨区"},{value:610303,text:"金台区"},{value:610304,text:"陈仓区"},{value:610322,text:"凤翔县"},{value:610323,text:"岐山县"},{value:610324,text:"扶风县"},{value:610326,text:"眉县"},{value:610327,text:"陇县"},{value:610328,text:"千阳县"},{value:610329,text:"麟游县"},{value:610330,text:"凤县"},{value:610331,text:"太白县"},{value:610332,text:"其它区"}]},{value:610400,text:"咸阳市",children:[{value:610402,text:"秦都区"},{value:610403,text:"杨陵区"},{value:610404,text:"渭城区"},{value:610422,text:"三原县"},{value:610423,text:"泾阳县"},{value:610424,text:"乾县"},{value:610425,text:"礼泉县"},{value:610426,text:"永寿县"},{value:610427,text:"彬县"},{value:610428,text:"长武县"},{value:610429,text:"旬邑县"},{value:610430,text:"淳化县"},{value:610431,text:"武功县"},{value:610481,text:"兴平市"},{value:610482,text:"其它区"}]},{value:610500,text:"渭南市",children:[{value:610502,text:"临渭区"},{value:610521,text:"华县"},{value:610522,text:"潼关县"},{value:610523,text:"大荔县"},{value:610524,text:"合阳县"},{value:610525,text:"澄城县"},{value:610526,text:"蒲城县"},{value:610527,text:"白水县"},{value:610528,text:"富平县"},{value:610581,text:"韩城市"},{value:610582,text:"华阴市"},{value:610583,text:"其它区"}]},{value:610600,text:"延安市",children:[{value:610602,text:"宝塔区"},{value:610621,text:"延长县"},{value:610622,text:"延川县"},{value:610623,text:"子长县"},{value:610624,text:"安塞县"},{value:610625,text:"志丹县"},{value:610626,text:"吴起县"},{value:610627,text:"甘泉县"},{value:610628,text:"富县"},{value:610629,text:"洛川县"},{value:610630,text:"宜川县"},{value:610631,text:"黄龙县"},{value:610632,text:"黄陵县"},{value:610633,text:"其它区"}]},{value:610700,text:"汉中市",children:[{value:610702,text:"汉台区"},{value:610721,text:"南郑县"},{value:610722,text:"城固县"},{value:610723,text:"洋县"},{value:610724,text:"西乡县"},{value:610725,text:"勉县"},{value:610726,text:"宁强县"},{value:610727,text:"略阳县"},{value:610728,text:"镇巴县"},{value:610729,text:"留坝县"},{value:610730,text:"佛坪县"},{value:610731,text:"其它区"}]},{value:610800,text:"榆林市",children:[{value:610802,text:"榆阳区"},{value:610821,text:"神木县"},{value:610822,text:"府谷县"},{value:610823,text:"横山县"},{value:610824,text:"靖边县"},{value:610825,text:"定边县"},{value:610826,text:"绥德县"},{value:610827,text:"米脂县"},{value:610828,text:"佳县"},{value:610829,text:"吴堡县"},{value:610830,text:"清涧县"},{value:610831,text:"子洲县"},{value:610832,text:"其它区"}]},{value:610900,text:"安康市",children:[{value:610902,text:"汉滨区"},{value:610921,text:"汉阴县"},{value:610922,text:"石泉县"},{value:610923,text:"宁陕县"},{value:610924,text:"紫阳县"},{value:610925,text:"岚皋县"},{value:610926,text:"平利县"},{value:610927,text:"镇坪县"},{value:610928,text:"旬阳县"},{value:610929,text:"白河县"},{value:610930,text:"其它区"}]},{value:611e3,text:"商洛市",children:[{value:611002,text:"商州区"},{value:611021,text:"洛南县"},{value:611022,text:"丹凤县"},{value:611023,text:"商南县"},{value:611024,text:"山阳县"},{value:611025,text:"镇安县"},{value:611026,text:"柞水县"},{value:611027,text:"其它区"}]}]},{value:62e4,text:"甘肃",children:[{value:620100,text:"兰州市",children:[{value:620102,text:"城关区"},{value:620103,text:"七里河区"},{value:620104,text:"西固区"},{value:620105,text:"安宁区"},{value:620111,text:"红古区"},{value:620121,text:"永登县"},{value:620122,text:"皋兰县"},{value:620123,text:"榆中县"},{value:620124,text:"其它区"}]},{value:620200,text:"嘉峪关市",children:[{value:620201100,text:"新城镇"},{value:620201101,text:"峪泉镇"},{value:620201102,text:"文殊镇"},{value:620201401,text:"雄关区"},{value:620201402,text:"镜铁区"},{value:620201403,text:"长城区"}]},{value:620300,text:"金昌市",children:[{value:620302,text:"金川区"},{value:620321,text:"永昌县"},{value:620322,text:"其它区"}]},{value:620400,text:"白银市",children:[{value:620402,text:"白银区"},{value:620403,text:"平川区"},{value:620421,text:"靖远县"},{value:620422,text:"会宁县"},{value:620423,text:"景泰县"},{value:620424,text:"其它区"}]},{value:620500,text:"天水市",children:[{value:620502,text:"秦州区"},{value:620503,text:"麦积区"},{value:620521,text:"清水县"},{value:620522,text:"秦安县"},{value:620523,text:"甘谷县"},{value:620524,text:"武山县"},{value:620525,text:"张家川回族自治县"},{value:620526,text:"其它区"}]},{value:620600,text:"武威市",children:[{value:620602,text:"凉州区"},{value:620621,text:"民勤县"},{value:620622,text:"古浪县"},{value:620623,text:"天祝藏族自治县"},{value:620624,text:"其它区"}]},{value:620700,text:"张掖市",children:[{value:620702,text:"甘州区"},{value:620721,text:"肃南裕固族自治县"},{value:620722,text:"民乐县"},{value:620723,text:"临泽县"},{value:620724,text:"高台县"},{value:620725,text:"山丹县"},{value:620726,text:"其它区"}]},{value:620800,text:"平凉市",children:[{value:620802,text:"崆峒区"},{value:620821,text:"泾川县"},{value:620822,text:"灵台县"},{value:620823,text:"崇信县"},{value:620824,text:"华亭县"},{value:620825,text:"庄浪县"},{value:620826,text:"静宁县"},{value:620827,text:"其它区"}]},{value:620900,text:"酒泉市",children:[{value:620902,text:"肃州区"},{value:620921,text:"金塔县"},{value:620922,text:"瓜州县"},{value:620923,text:"肃北蒙古族自治县"},{value:620924,text:"阿克塞哈萨克族自治县"},{value:620981,text:"玉门市"},{value:620982,text:"敦煌市"},{value:620983,text:"其它区"}]},{value:621e3,text:"庆阳市",children:[{value:621002,text:"西峰区"},{value:621021,text:"庆城县"},{value:621022,text:"环县"},{value:621023,text:"华池县"},{value:621024,text:"合水县"},{value:621025,text:"正宁县"},{value:621026,text:"宁县"},{value:621027,text:"镇原县"},{value:621028,text:"其它区"}]},{value:621100,text:"定西市",children:[{value:621102,text:"安定区"},{value:621121,text:"通渭县"},{value:621122,text:"陇西县"},{value:621123,text:"渭源县"},{value:621124,text:"临洮县"},{value:621125,text:"漳县"},{value:621126,text:"岷县"},{value:621127,text:"其它区"}]},{value:621200,text:"陇南市",children:[{value:621202,text:"武都区"},{value:621221,text:"成县"},{value:621222,text:"文县"},{value:621223,text:"宕昌县"},{value:621224,text:"康县"},{value:621225,text:"西和县"},{value:621226,text:"礼县"},{value:621227,text:"徽县"},{value:621228,text:"两当县"},{value:621229,text:"其它区"}]},{value:622900,text:"临夏回族自治州",children:[{value:622901,text:"临夏市"},{value:622921,text:"临夏县"},{value:622922,text:"康乐县"},{value:622923,text:"永靖县"},{value:622924,text:"广河县"},{value:622925,text:"和政县"},{value:622926,text:"东乡族自治县"},{value:622927,text:"积石山保安族东乡族撒拉族自治县"},{value:622928,text:"其它区"}]},{value:623e3,text:"甘南藏族自治州",children:[{value:623001,text:"合作市"},{value:623021,text:"临潭县"},{value:623022,text:"卓尼县"},{value:623023,text:"舟曲县"},{value:623024,text:"迭部县"},{value:623025,text:"玛曲县"},{value:623026,text:"碌曲县"},{value:623027,text:"夏河县"},{value:623028,text:"其它区"}]}]},{value:63e4,text:"青海",children:[{value:630100,text:"西宁市",children:[{value:630102,text:"城东区"},{value:630103,text:"城中区"},{value:630104,text:"城西区"},{value:630105,text:"城北区"},{value:630121,text:"大通回族土族自治县"},{value:630122,text:"湟中县"},{value:630123,text:"湟源县"},{value:630124,text:"其它区"}]},{value:632100,text:"海东市",children:[{value:632121,text:"平安区"},{value:632122,text:"民和回族土族自治县"},{value:632123,text:"乐都区"},{value:632126,text:"互助土族自治县"},{value:632127,text:"化隆回族自治县"},{value:632128,text:"循化撒拉族自治县"},{value:632129,text:"其它区"}]},{value:632200,text:"海北藏族自治州",children:[{value:632221,text:"门源回族自治县"},{value:632222,text:"祁连县"},{value:632223,text:"海晏县"},{value:632224,text:"刚察县"},{value:632225,text:"其它区"}]},{value:632300,text:"黄南藏族自治州",children:[{value:632321,text:"同仁县"},{value:632322,text:"尖扎县"},{value:632323,text:"泽库县"},{value:632324,text:"河南蒙古族自治县"},{value:632325,text:"其它区"}]},{value:632500,text:"海南藏族自治州",children:[{value:632521,text:"共和县"},{value:632522,text:"同德县"},{value:632523,text:"贵德县"},{value:632524,text:"兴海县"},{value:632525,text:"贵南县"},{value:632526,text:"其它区"}]},{value:632600,text:"果洛藏族自治州",children:[{value:632621,text:"玛沁县"},{value:632622,text:"班玛县"},{value:632623,text:"甘德县"},{value:632624,text:"达日县"},{value:632625,text:"久治县"},{value:632626,text:"玛多县"},{value:632627,text:"其它区"}]},{value:632700,text:"玉树藏族自治州",children:[{value:632721,text:"玉树市"},{value:632722,text:"杂多县"},{value:632723,text:"称多县"},{value:632724,text:"治多县"},{value:632725,text:"囊谦县"},{value:632726,text:"曲麻莱县"},{value:632727,text:"其它区"}]},{value:632800,text:"海西蒙古族藏族自治州",children:[{value:632801,text:"格尔木市"},{value:632802,text:"德令哈市"},{value:632821,text:"乌兰县"},{value:632822,text:"都兰县"},{value:632823,text:"天峻县"},{value:632824,text:"其它区"}]}]},{value:64e4,text:"宁夏",children:[{value:640100,text:"银川市",children:[{value:640104,text:"兴庆区"},{value:640105,text:"西夏区"},{value:640106,text:"金凤区"},{value:640121,text:"永宁县"},{value:640122,text:"贺兰县"},{value:640181,text:"灵武市"},{value:640182,text:"其它区"}]},{value:640200,text:"石嘴山市",children:[{value:640202,text:"大武口区"},{value:640205,text:"惠农区"},{value:640221,text:"平罗县"},{value:640222,text:"其它区"}]},{value:640300,text:"吴忠市",children:[{value:640302,text:"利通区"},{value:640303,text:"红寺堡区"},{value:640323,text:"盐池县"},{value:640324,text:"同心县"},{value:640381,text:"青铜峡市"},{value:640382,text:"其它区"}]},{value:640400,text:"固原市",children:[{value:640402,text:"原州区"},{value:640422,text:"西吉县"},{value:640423,text:"隆德县"},{value:640424,text:"泾源县"},{value:640425,text:"彭阳县"},{value:640426,text:"其它区"}]},{value:640500,text:"中卫市",children:[{value:640502,text:"沙坡头区"},{value:640521,text:"中宁县"},{value:640522,text:"海原县"},{value:640523,text:"其它区"}]}]},{value:65e4,text:"新疆",children:[{value:650100,text:"乌鲁木齐市",children:[{value:650102,text:"天山区"},{value:650103,text:"沙依巴克区"},{value:650104,text:"新市区"},{value:650105,text:"水磨沟区"},{value:650106,text:"头屯河区"},{value:650107,text:"达坂城区"},{value:650108,text:"东山区"},{value:650109,text:"米东区"},{value:650121,text:"乌鲁木齐县"},{value:650122,text:"其它区"}]},{value:650200,text:"克拉玛依市",children:[{value:650202,text:"独山子区"},{value:650203,text:"克拉玛依区"},{value:650204,text:"白碱滩区"},{value:650205,text:"乌尔禾区"},{value:650206,text:"其它区"}]},{value:652100,text:"吐鲁番市",children:[{value:652101,text:"高昌区"},{value:652122,text:"鄯善县"},{value:652123,text:"托克逊县"},{value:652124,text:"其它区"}]},{value:652200,text:"哈密地区",children:[{value:652201,text:"哈密市"},{value:652222,text:"巴里坤哈萨克自治县"},{value:652223,text:"伊吾县"},{value:652224,text:"其它区"}]},{value:652300,text:"昌吉回族自治州",children:[{value:652301,text:"昌吉市"},{value:652302,text:"阜康市"},{value:652303,text:"米泉市"},{value:652323,text:"呼图壁县"},{value:652324,text:"玛纳斯县"},{value:652325,text:"奇台县"},{value:652327,text:"吉木萨尔县"},{value:652328,text:"木垒哈萨克自治县"},{value:652329,text:"其它区"}]},{value:652700,text:"博尔塔拉蒙古自治州",children:[{value:652701,text:"博乐市"},{value:652702,text:"阿拉山口市"},{value:652722,text:"精河县"},{value:652723,text:"温泉县"},{value:652724,text:"其它区"}]},{value:652800,text:"巴音郭楞蒙古自治州",children:[{value:652801,text:"库尔勒市"},{value:652822,text:"轮台县"},{value:652823,text:"尉犁县"},{value:652824,text:"若羌县"},{value:652825,text:"且末县"},{value:652826,text:"焉耆回族自治县"},{value:652827,text:"和静县"},{value:652828,text:"和硕县"},{value:652829,text:"博湖县"},{value:652830,text:"其它区"}]},{value:652900,text:"阿克苏地区",children:[{value:652901,text:"阿克苏市"},{value:652922,text:"温宿县"},{value:652923,text:"库车县"},{value:652924,text:"沙雅县"},{value:652925,text:"新和县"},{value:652926,text:"拜城县"},{value:652927,text:"乌什县"},{value:652928,text:"阿瓦提县"},{value:652929,text:"柯坪县"},{value:652930,text:"其它区"}]},{value:653e3,text:"克孜勒苏柯尔克孜自治州",children:[{value:653001,text:"阿图什市"},{value:653022,text:"阿克陶县"},{value:653023,text:"阿合奇县"},{value:653024,text:"乌恰县"},{value:653025,text:"其它区"}]},{value:653100,text:"喀什地区",children:[{value:653101,text:"喀什市"},{value:653121,text:"疏附县"},{value:653122,text:"疏勒县"},{value:653123,text:"英吉沙县"},{value:653124,text:"泽普县"},{value:653125,text:"莎车县"},{value:653126,text:"叶城县"},{value:653127,text:"麦盖提县"},{value:653128,text:"岳普湖县"},{value:653129,text:"伽师县"},{value:653130,text:"巴楚县"},{value:653131,text:"塔什库尔干塔吉克自治县"},{value:653132,text:"其它区"}]},{value:653200,text:"和田地区",children:[{value:653201,text:"和田市"},{value:653221,text:"和田县"},{value:653222,text:"墨玉县"},{value:653223,text:"皮山县"},{value:653224,text:"洛浦县"},{value:653225,text:"策勒县"},{value:653226,text:"于田县"},{value:653227,text:"民丰县"},{value:653228,text:"其它区"}]},{value:654e3,text:"伊犁哈萨克自治州",children:[{value:654002,text:"伊宁市"},{value:654003,text:"奎屯市"},{value:654021,text:"伊宁县"},{value:654022,text:"察布查尔锡伯自治县"},{value:654023,text:"霍城县"},{value:654024,text:"巩留县"},{value:654025,text:"新源县"},{value:654026,text:"昭苏县"},{value:654027,text:"特克斯县"},{value:654028,text:"尼勒克县"},{value:654029,text:"其它区"}]},{value:654200,text:"塔城地区",children:[{value:654201,text:"塔城市"},{value:654202,text:"乌苏市"},{value:654221,text:"额敏县"},{value:654223,text:"沙湾县"},{value:654224,text:"托里县"},{value:654225,text:"裕民县"},{value:654226,text:"和布克赛尔蒙古自治县"},{value:654227,text:"其它区"}]},{value:654300,text:"阿勒泰地区",children:[{value:654301,text:"阿勒泰市"},{value:654321,text:"布尔津县"},{value:654322,text:"富蕴县"},{value:654323,text:"福海县"},{value:654324,text:"哈巴河县"},{value:654325,text:"青河县"},{value:654326,text:"吉木乃县"},{value:654327,text:"其它区"}]},{value:659001,text:"石河子市",children:[{value:659001001,text:"新城街道"},{value:659001002,text:"向阳街道"},{value:659001003,text:"红山街道"},{value:659001004,text:"老街街道"},{value:659001005,text:"东城街道"},{value:659001100,text:"北泉镇"},{value:659001200,text:"石河子乡"},{value:659001500,text:"兵团一五二团"}]},{value:659002,text:"阿拉尔市",children:[{value:659002001,text:"金银川路街道"},{value:659002002,text:"幸福路街道"},{value:659002003,text:"青松路街道"},{value:659002004,text:"南口街道"},{value:659002200,text:"托喀依乡"},{value:659002402,text:"工业园区"},{value:659002500,text:"兵团七团"},{value:659002501,text:"兵团八团"},{value:659002503,text:"兵团十团"},{value:659002504,text:"兵团十一团"},{value:659002505,text:"兵团十二团"},{value:659002506,text:"兵团十三团"},{value:659002507,text:"兵团十四团"},{value:659002509,text:"兵团十六团"},{value:659002511,text:"兵团第一师水利水电工程处"},{value:659002512,text:"兵团第一师塔里木灌区水利管理处"},{value:659002513,text:"阿拉尔农场"},{value:659002514,text:"兵团第一师幸福农场"},{value:659002515,text:"中心监狱"}]},{value:659003,text:"图木舒克市",children:[{value:659003001,text:"齐干却勒街道"},{value:659003002,text:"前海街道"},{value:659003003,text:"永安坝街道"},{value:659003504,text:"兵团四十四团"},{value:659003509,text:"兵团四十九团"},{value:659003510,text:"兵团五十团"},{value:659003511,text:"兵团五十一团"},{value:659003513,text:"兵团五十三团"},{value:659003514,text:"兵团图木舒克市喀拉拜勒镇"},{value:659003515,text:"兵团图木舒克市永安坝"}]},{value:659004,text:"五家渠市",children:[{value:659004001,text:"军垦路街道"},{value:659004002,text:"青湖路街道"},{value:659004003,text:"人民路街道"},{value:659004500,text:"兵团一零一团"},{value:659004501,text:"兵团一零二团"},{value:659004502,text:"兵团一零三团"}]}]},{value:71e4,text:"台湾",children:[{value:710100,text:"台北市",children:[{value:710101,text:"中正区"},{value:710102,text:"大同区"},{value:710103,text:"中山区"},{value:710104,text:"松山区"},{value:710105,text:"大安区"},{value:710106,text:"万华区"},{value:710107,text:"信义区"},{value:710108,text:"士林区"},{value:710109,text:"北投区"},{value:710110,text:"内湖区"},{value:710111,text:"南港区"},{value:710112,text:"文山区"},{value:710113,text:"其它区"}]},{value:710200,text:"高雄市",children:[{value:710201,text:"新兴区"},{value:710202,text:"前金区"},{value:710203,text:"芩雅区"},{value:710204,text:"盐埕区"},{value:710205,text:"鼓山区"},{value:710206,text:"旗津区"},{value:710207,text:"前镇区"},{value:710208,text:"三民区"},{value:710209,text:"左营区"},{value:710210,text:"楠梓区"},{value:710211,text:"小港区"},{value:710212,text:"其它区"},{value:710241,text:"苓雅区"},{value:710242,text:"仁武区"},{value:710243,text:"大社区"},{value:710244,text:"冈山区"},{value:710245,text:"路竹区"},{value:710246,text:"阿莲区"},{value:710247,text:"田寮区"},{value:710248,text:"燕巢区"},{value:710249,text:"桥头区"},{value:710250,text:"梓官区"},{value:710251,text:"弥陀区"},{value:710252,text:"永安区"},{value:710253,text:"湖内区"},{value:710254,text:"凤山区"},{value:710255,text:"大寮区"},{value:710256,text:"林园区"},{value:710257,text:"鸟松区"},{value:710258,text:"大树区"},{value:710259,text:"旗山区"},{value:710260,text:"美浓区"},{value:710261,text:"六龟区"},{value:710262,text:"内门区"},{value:710263,text:"杉林区"},{value:710264,text:"甲仙区"},{value:710265,text:"桃源区"},{value:710266,text:"那玛夏区"},{value:710267,text:"茂林区"},{value:710268,text:"茄萣区"}]},{value:710300,text:"台南市",children:[{value:710301,text:"中西区"},{value:710302,text:"东区"},{value:710303,text:"南区"},{value:710304,text:"北区"},{value:710305,text:"安平区"},{value:710306,text:"安南区"},{value:710307,text:"其它区"},{value:710339,text:"永康区"},{value:710340,text:"归仁区"},{value:710341,text:"新化区"},{value:710342,text:"左镇区"},{value:710343,text:"玉井区"},{value:710344,text:"楠西区"},{value:710345,text:"南化区"},{value:710346,text:"仁德区"},{value:710347,text:"关庙区"},{value:710348,text:"龙崎区"},{value:710349,text:"官田区"},{value:710350,text:"麻豆区"},{value:710351,text:"佳里区"},{value:710352,text:"西港区"},{value:710353,text:"七股区"},{value:710354,text:"将军区"},{value:710355,text:"学甲区"},{value:710356,text:"北门区"},{value:710357,text:"新营区"},{value:710358,text:"后壁区"},{value:710359,text:"白河区"},{value:710360,text:"东山区"},{value:710361,text:"六甲区"},{value:710362,text:"下营区"},{value:710363,text:"柳营区"},{value:710364,text:"盐水区"},{value:710365,text:"善化区"},{value:710366,text:"大内区"},{value:710367,text:"山上区"},{value:710368,text:"新市区"},{value:710369,text:"安定区"}]},{value:710400,text:"台中市",children:[{value:710401,text:"中区"},{value:710402,text:"东区"},{value:710403,text:"南区"},{value:710404,text:"西区"},{value:710405,text:"北区"},{value:710406,text:"北屯区"},{value:710407,text:"西屯区"},{value:710408,text:"南屯区"},{value:710409,text:"其它区"},{value:710431,text:"太平区"},{value:710432,text:"大里区"},{value:710433,text:"雾峰区"},{value:710434,text:"乌日区"},{value:710435,text:"丰原区"},{value:710436,text:"后里区"},{value:710437,text:"石冈区"},{value:710438,text:"东势区"},{value:710439,text:"和平区"},{value:710440,text:"新社区"},{value:710441,text:"潭子区"},{value:710442,text:"大雅区"},{value:710443,text:"神冈区"},{value:710444,text:"大肚区"},{value:710445,text:"沙鹿区"},{value:710446,text:"龙井区"},{value:710447,text:"梧栖区"},{value:710448,text:"清水区"},{value:710449,text:"大甲区"},{value:710450,text:"外埔区"},{value:710451,text:"大安区"}]},{value:710500,text:"金门县",children:[{value:710507,text:"金沙镇"},{value:710508,text:"金湖镇"},{value:710509,text:"金宁乡"},{value:710510,text:"金城镇"},{value:710511,text:"烈屿乡"},{value:710512,text:"乌坵乡"}]},{value:710600,text:"南投县",children:[{value:710614,text:"南投市"},{value:710615,text:"中寮乡"},{value:710616,text:"草屯镇"},{value:710617,text:"国姓乡"},{value:710618,text:"埔里镇"},{value:710619,text:"仁爱乡"},{value:710620,text:"名间乡"},{value:710621,text:"集集镇"},{value:710622,text:"水里乡"},{value:710623,text:"鱼池乡"},{value:710624,text:"信义乡"},{value:710625,text:"竹山镇"},{value:710626,text:"鹿谷乡"}]},{value:710700,text:"基隆市",children:[{value:710701,text:"仁爱区"},{value:710702,text:"信义区"},{value:710703,text:"中正区"},{value:710704,text:"中山区"},{value:710705,text:"安乐区"},{value:710706,text:"暖暖区"},{value:710707,text:"七堵区"},{value:710708,text:"其它区"}]},{value:710800,text:"新竹市",children:[{value:710801,text:"东区"},{value:710802,text:"北区"},{value:710803,text:"香山区"},{value:710804,text:"其它区"}]},{value:710900,text:"嘉义市",children:[{value:710901,text:"东区"},{value:710902,text:"西区"},{value:710903,text:"其它区"}]},{value:711100,text:"新北市",children:[{value:711130,text:"万里区"},{value:711131,text:"金山区"},{value:711132,text:"板桥区"},{value:711133,text:"汐止区"},{value:711134,text:"深坑区"},{value:711135,text:"石碇区"},{value:711136,text:"瑞芳区"},{value:711137,text:"平溪区"},{value:711138,text:"双溪区"},{value:711139,text:"贡寮区"},{value:711140,text:"新店区"},{value:711141,text:"坪林区"},{value:711142,text:"乌来区"},{value:711143,text:"永和区"},{value:711144,text:"中和区"},{value:711145,text:"土城区"},{value:711146,text:"三峡区"},{value:711147,text:"树林区"},{value:711148,text:"莺歌区"},{value:711149,text:"三重区"},{value:711150,text:"新庄区"},{value:711151,text:"泰山区"},{value:711152,text:"林口区"},{value:711153,text:"芦洲区"},{value:711154,text:"五股区"},{value:711155,text:"八里区"},{value:711156,text:"淡水区"},{value:711157,text:"三芝区"},{value:711158,text:"石门区"}]},{value:711200,text:"宜兰县",children:[{value:711214,text:"宜兰市"},{value:711215,text:"头城镇"},{value:711216,text:"礁溪乡"},{value:711217,text:"壮围乡"},{value:711218,text:"员山乡"},{value:711219,text:"罗东镇"},{value:711220,text:"三星乡"},{value:711221,text:"大同乡"},{value:711222,text:"五结乡"},{value:711223,text:"冬山乡"},{value:711224,text:"苏澳镇"},{value:711225,text:"南澳乡"},{value:711226,text:"钓鱼台"}]},{value:711300,text:"新竹县",children:[{value:711314,text:"竹北市"},{value:711315,text:"湖口乡"},{value:711316,text:"新丰乡"},{value:711317,text:"新埔镇"},{value:711318,text:"关西镇"},{value:711319,text:"芎林乡"},{value:711320,text:"宝山乡"},{value:711321,text:"竹东镇"},{value:711322,text:"五峰乡"},{value:711323,text:"横山乡"},{value:711324,text:"尖石乡"},{value:711325,text:"北埔乡"},{value:711326,text:"峨眉乡"}]},{value:711400,text:"桃园县",children:[{value:711414,text:"中坜市"},{value:711415,text:"平镇市"},{value:711416,text:"龙潭乡"},{value:711417,text:"杨梅市"},{value:711418,text:"新屋乡"},{value:711419,text:"观音乡"},{value:711420,text:"桃园市"},{value:711421,text:"龟山乡"},{value:711422,text:"八德市"},{value:711423,text:"大溪镇"},{value:711424,text:"复兴乡"},{value:711425,text:"大园乡"},{value:711426,text:"芦竹乡"}]},{value:711500,text:"苗栗县",children:[{value:711519,text:"竹南镇"},{value:711520,text:"头份镇"},{value:711521,text:"三湾乡"},{value:711522,text:"南庄乡"},{value:711523,text:"狮潭乡"},{value:711524,text:"后龙镇"},{value:711525,text:"通霄镇"},{value:711526,text:"苑里镇"},{value:711527,text:"苗栗市"},{value:711528,text:"造桥乡"},{value:711529,text:"头屋乡"},{value:711530,text:"公馆乡"},{value:711531,text:"大湖乡"},{value:711532,text:"泰安乡"},{value:711533,text:"铜锣乡"},{value:711534,text:"三义乡"},{value:711535,text:"西湖乡"},{value:711536,text:"卓兰镇"}]},{value:711700,text:"彰化县",children:[{value:711727,text:"彰化市"},{value:711728,text:"芬园乡"},{value:711729,text:"花坛乡"},{value:711730,text:"秀水乡"},{value:711731,text:"鹿港镇"},{value:711732,text:"福兴乡"},{value:711733,text:"线西乡"},{value:711734,text:"和美镇"},{value:711735,text:"伸港乡"},{value:711736,text:"员林镇"},{value:711737,text:"社头乡"},{value:711738,text:"永靖乡"},{value:711739,text:"埔心乡"},{value:711740,text:"溪湖镇"},{value:711741,text:"大村乡"},{value:711742,text:"埔盐乡"},{value:711743,text:"田中镇"},{value:711744,text:"北斗镇"},{value:711745,text:"田尾乡"},{value:711746,text:"埤头乡"},{value:711747,text:"溪州乡"},{value:711748,text:"竹塘乡"},{value:711749,text:"二林镇"},{value:711750,text:"大城乡"},{value:711751,text:"芳苑乡"},{value:711752,text:"二水乡"}]},{value:711900,text:"嘉义县",children:[{value:711919,text:"番路乡"},{value:711920,text:"梅山乡"},{value:711921,text:"竹崎乡"},{value:711922,text:"阿里山乡"},{value:711923,text:"中埔乡"},{value:711924,text:"大埔乡"},{value:711925,text:"水上乡"},{value:711926,text:"鹿草乡"},{value:711927,text:"太保市"},{value:711928,text:"朴子市"},{value:711929,text:"东石乡"},{value:711930,text:"六脚乡"},{value:711931,text:"新港乡"},{value:711932,text:"民雄乡"},{value:711933,text:"大林镇"},{value:711934,text:"溪口乡"},{value:711935,text:"义竹乡"},{value:711936,text:"布袋镇"}]},{value:712100,text:"云林县",children:[{value:712121,text:"斗南镇"},{value:712122,text:"大埤乡"},{value:712123,text:"虎尾镇"},{value:712124,text:"土库镇"},{value:712125,text:"褒忠乡"},{value:712126,text:"东势乡"},{value:712127,text:"台西乡"},{value:712128,text:"仑背乡"},{value:712129,text:"麦寮乡"},{value:712130,text:"斗六市"},{value:712131,text:"林内乡"},{value:712132,text:"古坑乡"},{value:712133,text:"莿桐乡"},{value:712134,text:"西螺镇"},{value:712135,text:"二仑乡"},{value:712136,text:"北港镇"},{value:712137,text:"水林乡"},{value:712138,text:"口湖乡"},{value:712139,text:"四湖乡"},{value:712140,text:"元长乡"}]},{value:712400,text:"屏东县",children:[{value:712434,text:"屏东市"},{value:712435,text:"三地门乡"},{value:712436,text:"雾台乡"},{value:712437,text:"玛家乡"},{value:712438,text:"九如乡"},{value:712439,text:"里港乡"},{value:712440,text:"高树乡"},{value:712441,text:"盐埔乡"},{value:712442,text:"长治乡"},{value:712443,text:"麟洛乡"},{value:712444,text:"竹田乡"},{value:712445,text:"内埔乡"},{value:712446,text:"万丹乡"},{value:712447,text:"潮州镇"},{value:712448,text:"泰武乡"},{value:712449,text:"来义乡"},{value:712450,text:"万峦乡"},{value:712451,text:"崁顶乡"},{value:712452,text:"新埤乡"},{value:712453,text:"南州乡"},{value:712454,text:"林边乡"},{value:712455,text:"东港镇"},{value:712456,text:"琉球乡"},{value:712457,text:"佳冬乡"},{value:712458,text:"新园乡"},{value:712459,text:"枋寮乡"},{value:712460,text:"枋山乡"},{value:712461,text:"春日乡"},{value:712462,text:"狮子乡"},{value:712463,text:"车城乡"},{value:712464,text:"牡丹乡"},{value:712465,text:"恒春镇"},{value:712466,text:"满州乡"}]},{value:712500,text:"台东县",children:[{value:712517,text:"台东市"},{value:712518,text:"绿岛乡"},{value:712519,text:"兰屿乡"},{value:712520,text:"延平乡"},{value:712521,text:"卑南乡"},{value:712522,text:"鹿野乡"},{value:712523,text:"关山镇"},{value:712524,text:"海端乡"},{value:712525,text:"池上乡"},{value:712526,text:"东河乡"},{value:712527,text:"成功镇"},{value:712528,text:"长滨乡"},{value:712529,text:"金峰乡"},{value:712530,text:"大武乡"},{value:712531,text:"达仁乡"},{value:712532,text:"太麻里乡"}]},{value:712600,text:"花莲县",children:[{value:712615,text:"花莲市"},{value:712616,text:"新城乡"},{value:712617,text:"太鲁阁"},{value:712618,text:"秀林乡"},{value:712619,text:"吉安乡"},{value:712620,text:"寿丰乡"},{value:712621,text:"凤林镇"},{value:712622,text:"光复乡"},{value:712623,text:"丰滨乡"},{value:712624,text:"瑞穗乡"},{value:712625,text:"万荣乡"},{value:712626,text:"玉里镇"},{value:712627,text:"卓溪乡"},{value:712628,text:"富里乡"}]},{value:712700,text:"澎湖县",children:[{value:712707,text:"马公市"},{value:712708,text:"西屿乡"},{value:712709,text:"望安乡"},{value:712710,text:"七美乡"},{value:712711,text:"白沙乡"},{value:712712,text:"湖西乡"}]},{value:712800,text:"连江县",children:[{value:712805,text:"南竿乡"},{value:712806,text:"北竿乡"},{value:712807,text:"莒光乡"},{value:712808,text:"东引乡"}]}]},{value:81e4,text:"香港",children:[{value:810100,text:"香港岛",children:[{value:810101,text:"中西区"},{value:810102,text:"湾仔"},{value:810103,text:"东区"},{value:810104,text:"南区"}]},{value:810200,text:"九龙",children:[{value:810201,text:"九龙城区"},{value:810202,text:"油尖旺区"},{value:810203,text:"深水埗区"},{value:810204,text:"黄大仙区"},{value:810205,text:"观塘区"}]},{value:810300,text:"新界",children:[{value:810301,text:"北区"},{value:810302,text:"大埔区"},{value:810303,text:"沙田区"},{value:810304,text:"西贡区"},{value:810305,text:"元朗区"},{value:810306,text:"屯门区"},{value:810307,text:"荃湾区"},{value:810308,text:"葵青区"},{value:810309,text:"离岛区"}]}]},{value:82e4,text:"澳门",children:[{value:820100,text:"澳门半岛",children:[]},{value:820200,text:"离岛",children:[]}]}]};e.default=u},"6de8":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=l(a("a34a")),n=l(a("c663"));function l(t){return t&&t.__esModule?t:{default:t}}function r(t,e,a,u,n,l,r){try{var v=t[l](r),i=v.value}catch(o){return void a(o)}v.done?e(i):Promise.resolve(i).then(u,n)}function v(t){return function(){var e=this,a=arguments;return new Promise(function(u,n){var l=t.apply(e,a);function v(t){r(l,u,n,v,i,"next",t)}function i(t){r(l,u,n,v,i,"throw",t)}v(void 0)})}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var a=0;a<e.length;a++){var u=e[a];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(t,u.key,u)}}function x(t,e,a){return e&&o(t.prototype,e),a&&o(t,a),t}function c(t,e){return!e||"object"!==typeof e&&"function"!==typeof e?s(t):e}function s(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function f(t){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},f(t)}function p(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}function h(t,e){return h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},h(t,e)}var d=function(t){function e(){return i(this,e),c(this,f(e).apply(this,arguments))}return p(e,t),x(e,[{key:"getAnswer",value:function(){var t=v(u.default.mark(function t(e){return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.api.get({url:this.config.ajaxUrl.urlList.getAnswer,data:e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()},{key:"detailedAnswer",value:function(){var t=v(u.default.mark(function t(e){return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.api.get({url:this.config.ajaxUrl.urlList.detailedAnswer,data:e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()},{key:"goodsAnswerDetails",value:function(){var t=v(u.default.mark(function t(e){return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.api.get({url:this.config.ajaxUrl.urlList.goodsAnswerDetails,data:e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()},{key:"userQuestions",value:function(){var t=v(u.default.mark(function t(e){return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.api.post({url:this.config.ajaxUrl.urlList.userQuestions,data:e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()},{key:"userAnswer",value:function(){var t=v(u.default.mark(function t(e){return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.api.post({url:this.config.ajaxUrl.urlList.userAnswer,data:e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()},{key:"usefulAnswer",value:function(){var t=v(u.default.mark(function t(e){return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.api.post({url:this.config.ajaxUrl.urlList.usefulAnswer,data:e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()}]),e}(n.default);e.default=d},"6e42":function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.createApp=pe,e.createComponent=ke,e.createPage=Oe,e.default=void 0;var u=n(a("66fd"));function n(t){return t&&t.__esModule?t:{default:t}}function l(t,e){return i(t)||v(t,e)||r()}function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function v(t,e){var a=[],u=!0,n=!1,l=void 0;try{for(var r,v=t[Symbol.iterator]();!(u=(r=v.next()).done);u=!0)if(a.push(r.value),e&&a.length===e)break}catch(i){n=!0,l=i}finally{try{u||null==v["return"]||v["return"]()}finally{if(n)throw l}}return a}function i(t){if(Array.isArray(t))return t}function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function x(t){return f(t)||s(t)||c()}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function s(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function f(t){if(Array.isArray(t)){for(var e=0,a=new Array(t.length);e<t.length;e++)a[e]=t[e];return a}}var p=Object.prototype.toString,h=Object.prototype.hasOwnProperty;function d(t){return"function"===typeof t}function y(t){return"string"===typeof t}function g(t){return"[object Object]"===p.call(t)}function _(t,e){return h.call(t,e)}function b(){}function w(t){var e=Object.create(null);return function(a){var u=e[a];return u||(e[a]=t(a))}}var m=/-(\w)/g,O=w(function(t){return t.replace(m,function(t,e){return e?e.toUpperCase():""})}),k=["invoke","success","fail","complete","returnValue"],j={},S={};function A(t,e){var a=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return a?E(a):a}function E(t){for(var e=[],a=0;a<t.length;a++)-1===e.indexOf(t[a])&&e.push(t[a]);return e}function P(t,e){var a=t.indexOf(e);-1!==a&&t.splice(a,1)}function $(t,e){Object.keys(e).forEach(function(a){-1!==k.indexOf(a)&&d(e[a])&&(t[a]=A(t[a],e[a]))})}function T(t,e){t&&e&&Object.keys(e).forEach(function(a){-1!==k.indexOf(a)&&d(e[a])&&P(t[a],e[a])})}function R(t,e){"string"===typeof t&&g(e)?$(S[t]||(S[t]={}),e):g(t)&&$(j,t)}function C(t,e){"string"===typeof t?g(e)?T(S[t],e):delete S[t]:g(t)&&T(j,t)}function D(t){return function(e){return t(e)||e}}function I(t){return!!t&&("object"===typeof t||"function"===typeof t)&&"function"===typeof t.then}function U(t,e){for(var a=!1,u=0;u<t.length;u++){var n=t[u];if(a)a=Promise.then(D(n));else{var l=n(e);if(I(l)&&(a=Promise.resolve(l)),!1===l)return{then:function(){}}}}return a||{then:function(t){return t(e)}}}function L(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return["success","fail","complete"].forEach(function(a){if(Array.isArray(t[a])){var u=e[a];e[a]=function(e){U(t[a],e).then(function(t){return d(u)&&u(t)||t})}}}),e}function M(t,e){var a=[];Array.isArray(j.returnValue)&&a.push.apply(a,x(j.returnValue));var u=S[t];return u&&Array.isArray(u.returnValue)&&a.push.apply(a,x(u.returnValue)),a.forEach(function(t){e=t(e)||e}),e}function N(t){var e=Object.create(null);Object.keys(j).forEach(function(t){"returnValue"!==t&&(e[t]=j[t].slice())});var a=S[t];return a&&Object.keys(a).forEach(function(t){"returnValue"!==t&&(e[t]=(e[t]||[]).concat(a[t]))}),e}function B(t,e,a){for(var u=arguments.length,n=new Array(u>3?u-3:0),l=3;l<u;l++)n[l-3]=arguments[l];var r=N(t);if(r&&Object.keys(r).length){if(Array.isArray(r.invoke)){var v=U(r.invoke,a);return v.then(function(t){return e.apply(void 0,[L(r,t)].concat(n))})}return e.apply(void 0,[L(r,a)].concat(n))}return e.apply(void 0,[a].concat(n))}var H={returnValue:function(t){return I(t)?t.then(function(t){return t[1]}).catch(function(t){return t[0]}):t}},F=/^\$|restoreGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/,q=/^create|Manager$/,V=/^on/;function W(t){return q.test(t)}function X(t){return F.test(t)}function z(t){return V.test(t)&&"onPush"!==t}function J(t){return t.then(function(t){return[null,t]}).catch(function(t){return[t]})}function G(t){return!(W(t)||X(t)||z(t))}function Y(t,e){return G(t)?function(){for(var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},u=arguments.length,n=new Array(u>1?u-1:0),l=1;l<u;l++)n[l-1]=arguments[l];return d(a.success)||d(a.fail)||d(a.complete)?M(t,B.apply(void 0,[t,e,a].concat(n))):M(t,J(new Promise(function(u,l){B.apply(void 0,[t,e,Object.assign({},a,{success:u,fail:l})].concat(n)),Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then(function(a){return e.resolve(t()).then(function(){return a})},function(a){return e.resolve(t()).then(function(){throw a})})})})))}:e}var K=1e-4,Z=750,Q=!1,tt=0,et=0;function at(){var t=wx.getSystemInfoSync(),e=t.platform,a=t.pixelRatio,u=t.windowWidth;tt=u,et=a,Q="ios"===e}function ut(t,e){if(0===tt&&at(),t=Number(t),0===t)return 0;var a=t/Z*(e||tt);return a<0&&(a=-a),a=Math.floor(a+K),0===a?1!==et&&Q?.5:1:t<0?-a:a}var nt={promiseInterceptor:H},lt=Object.freeze({upx2px:ut,interceptors:nt,addInterceptor:R,removeInterceptor:C}),rt={},vt=[],it=[],ot=["success","fail","cancel","complete"];function xt(t,e,a){return function(u){return e(st(t,u,a))}}function ct(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},n=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(g(e)){var l=!0===n?e:{};for(var r in d(a)&&(a=a(e,l)||{}),e)if(_(a,r)){var v=a[r];d(v)&&(v=v(e[r],e,l)),v?y(v)?l[v]=e[r]:g(v)&&(l[v.name?v.name:r]=v.value):console.warn("app-plus ".concat(t,"暂不支持").concat(r))}else-1!==ot.indexOf(r)?l[r]=xt(t,e[r],u):n||(l[r]=e[r]);return l}return d(e)&&(e=xt(t,e,u)),e}function st(t,e,a){var u=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return d(rt.returnValue)&&(e=rt.returnValue(t,e)),ct(t,e,a,{},u)}function ft(t,e){if(_(rt,t)){var a=rt[t];return a?function(e,u){var n=a;d(a)&&(n=a(e)),e=ct(t,e,n.args,n.returnValue);var l=[e];"undefined"!==typeof u&&l.push(u);var r=wx[n.name||t].apply(wx,l);return X(t)?st(t,r,n.returnValue,W(t)):r}:function(){console.error("app-plus 暂不支持".concat(t))}}return e}var pt=Object.create(null),ht=["onTabBarMidButtonTap","subscribePush","unsubscribePush","onPush","offPush","share"];function dt(t){return function(e){var a=e.fail,u=e.complete,n={errMsg:"".concat(t,":fail:暂不支持 ").concat(t," 方法")};d(a)&&a(n),d(u)&&u(n)}}ht.forEach(function(t){pt[t]=dt(t)});var yt=function(){return"function"===typeof getUniEmitter?getUniEmitter:function(){return t||(t=new u.default),t};var t}();function gt(t,e,a){return t[e].apply(t,a)}function _t(){return gt(yt(),"$on",Array.prototype.slice.call(arguments))}function bt(){return gt(yt(),"$off",Array.prototype.slice.call(arguments))}function wt(){return gt(yt(),"$once",Array.prototype.slice.call(arguments))}function mt(){return gt(yt(),"$emit",Array.prototype.slice.call(arguments))}var Ot=Object.freeze({$on:_t,$off:bt,$once:wt,$emit:mt});function kt(t){return"undefined"!==typeof weex?weex.requireModule(t):__requireNativePlugin__(t)}function jt(t){t.$processed=!0,t.postMessage=function(e){plus.webview.postMessageToUniNView({type:"UniAppSubNVue",data:e},t.id)};var e=[];if(t.onMessage=function(t){e.push(t)},t.$consumeMessage=function(t){e.forEach(function(e){return e(t)})},t.__uniapp_mask_id){var a=t.__uniapp_mask,u="0"===t.__uniapp_mask_id?{setStyle:function(t){var e=t.mask;kt("uni-tabview").setMask({color:e})}}:plus.webview.getWebviewById(t.__uniapp_mask_id),n=t.show,l=t.hide,r=t.close,v=function(){u.setStyle({mask:a})},i=function(){u.setStyle({mask:"none"})};t.show=function(){v();for(var e=arguments.length,a=new Array(e),u=0;u<e;u++)a[u]=arguments[u];return n.apply(t,a)},t.hide=function(){i();for(var e=arguments.length,a=new Array(e),u=0;u<e;u++)a[u]=arguments[u];return l.apply(t,a)},t.close=function(){i(),e=[];for(var a=arguments.length,u=new Array(a),n=0;n<a;n++)u[n]=arguments[n];return r.apply(t,u)}}}function St(t){var e=plus.webview.getWebviewById(t);return e&&!e.$processed&&jt(e),e}var At=Object.freeze({getSubNVueById:St,requireNativePlugin:kt}),Et=Page,Pt=Component,$t=/:/g,Tt=w(function(t){return O(t.replace($t,"-"))});function Rt(t){if(wx.canIUse("nextTick")){var e=t.triggerEvent;t.triggerEvent=function(a){for(var u=arguments.length,n=new Array(u>1?u-1:0),l=1;l<u;l++)n[l-1]=arguments[l];return e.apply(t,[Tt(a)].concat(n))}}}function Ct(t,e){var a=e[t];e[t]=a?function(){Rt(this);for(var t=arguments.length,e=new Array(t),u=0;u<t;u++)e[u]=arguments[u];return a.apply(this,e)}:function(){Rt(this)}}Page=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Ct("onLoad",t),Et(t)},Component=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Ct("created",t),Pt(t)};var Dt=["onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onResize","onTabItemTap"];function It(t,e){var a=t.$mp[t.mpType];e.forEach(function(e){_(a,e)&&(t[e]=a[e])})}function Ut(t,e){if(!e)return!0;if(u.default.options&&Array.isArray(u.default.options[t]))return!0;if(e=e.default||e,d(e))return!!d(e.extendOptions[t])||!!(e.super&&e.super.options&&Array.isArray(e.super.options[t]));if(d(e[t]))return!0;var a=e.mixins;return Array.isArray(a)?!!a.find(function(e){return Ut(t,e)}):void 0}function Lt(t,e,a){e.forEach(function(e){Ut(e,a)&&(t[e]=function(t){return this.$vm&&this.$vm.__call_hook(e,t)})})}function Mt(t,e){var a;return e=e.default||e,d(e)?(a=e,e=a.extendOptions):a=t.extend(e),[a,e]}function Nt(t,e){if(Array.isArray(e)&&e.length){var a=Object.create(null);e.forEach(function(t){a[t]=!0}),t.$scopedSlots=t.$slots=a}}function Bt(t,e){t=(t||"").split(",");var a=t.length;1===a?e._$vueId=t[0]:2===a&&(e._$vueId=t[0],e._$vuePid=t[1])}function Ht(t,e){var a=t.data||{},u=t.methods||{};if("function"===typeof a)try{a=a.call(e)}catch(n){Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG&&console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。",a)}else try{a=JSON.parse(JSON.stringify(a))}catch(n){}return g(a)||(a={}),Object.keys(u).forEach(function(t){-1!==e.__lifecycle_hooks__.indexOf(t)||_(a,t)||(a[t]=u[t])}),a}var Ft=[String,Number,Boolean,Object,Array,null];function qt(t){return function(e,a){this.$vm&&(this.$vm[t]=e)}}function Vt(t,e){var a=t["behaviors"],u=t["extends"],n=t["mixins"],l=t["props"];l||(t["props"]=l=[]);var r=[];return Array.isArray(a)&&a.forEach(function(t){r.push(t.replace("uni://","wx".concat("://"))),"uni://form-field"===t&&(Array.isArray(l)?(l.push("name"),l.push("value")):(l["name"]={type:String,default:""},l["value"]={type:[String,Number,Boolean,Array,Object,Date],default:""}))}),g(u)&&u.props&&r.push(e({properties:Xt(u.props,!0)})),Array.isArray(n)&&n.forEach(function(t){g(t)&&t.props&&r.push(e({properties:Xt(t.props,!0)}))}),r}function Wt(t,e,a,u){return Array.isArray(e)&&1===e.length?e[0]:e}function Xt(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],{});return e||(a.vueId={type:String,value:""},a.vueSlots={type:null,value:[],observer:function(t,e){var a=Object.create(null);t.forEach(function(t){a[t]=!0}),this.setData({$slots:a})}}),Array.isArray(t)?t.forEach(function(t){a[t]={type:null,observer:qt(t)}}):g(t)&&Object.keys(t).forEach(function(e){var u=t[e];if(g(u)){var n=u["default"];d(n)&&(n=n()),u.type=Wt(e,u.type),a[e]={type:-1!==Ft.indexOf(u.type)?u.type:null,value:n,observer:qt(e)}}else{var l=Wt(e,u);a[e]={type:-1!==Ft.indexOf(l)?l:null,observer:qt(e)}}}),a}function zt(t){try{t.mp=JSON.parse(JSON.stringify(t))}catch(e){}return t.stopPropagation=b,t.preventDefault=b,t.target=t.target||{},_(t,"detail")||(t.detail={}),g(t.detail)&&(t.target=Object.assign({},t.target,t.detail)),t}function Jt(t,e){var a=t;return e.forEach(function(e){var u=e[0],n=e[2];if(u||"undefined"!==typeof n){var l=e[1],r=e[3],v=u?t.__get_value(u,a):a;Number.isInteger(v)?a=n:l?Array.isArray(v)?a=v.find(function(e){return t.__get_value(l,e)===n}):g(v)?a=Object.keys(v).find(function(e){return t.__get_value(l,v[e])===n}):console.error("v-for 暂不支持循环数据：",v):a=v[n],r&&(a=t.__get_value(r,a))}}),a}function Gt(t,e,a){var u={};return Array.isArray(e)&&e.length&&e.forEach(function(e,n){"string"===typeof e?e?"$event"===e?u["$"+n]=a:0===e.indexOf("$event.")?u["$"+n]=t.__get_value(e.replace("$event.",""),a):u["$"+n]=t.__get_value(e):u["$"+n]=t:u["$"+n]=Jt(t,e)}),u}function Yt(t){for(var e={},a=1;a<t.length;a++){var u=t[a];e[u[0]]=u[1]}return e}function Kt(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],n=arguments.length>4?arguments[4]:void 0,l=arguments.length>5?arguments[5]:void 0,r=!1;if(n&&(r=e.currentTarget&&e.currentTarget.dataset&&"wx"===e.currentTarget.dataset.comType,!a.length))return r?[e]:e.detail.__args__||e.detail;var v=Gt(t,u,e),i=[];return a.forEach(function(t){"$event"===t?"__set_model"!==l||n?n&&!r?i.push(e.detail.__args__[0]):i.push(e):i.push(e.target.value):Array.isArray(t)&&"o"===t[0]?i.push(Yt(t)):"string"===typeof t&&_(v,t)?i.push(v[t]):i.push(t)}),i}var Zt="~",Qt="^";function te(t,e){return t===e||"regionchange"===e&&("begin"===t||"end"===t)}function ee(t){var e=this;t=zt(t);var a=(t.currentTarget||t.target).dataset;if(!a)return console.warn("事件信息不存在");var u=a.eventOpts||a["event-opts"];if(!u)return console.warn("事件信息不存在");var n=t.type,l=[];return u.forEach(function(a){var u=a[0],r=a[1],v=u.charAt(0)===Qt;u=v?u.slice(1):u;var i=u.charAt(0)===Zt;u=i?u.slice(1):u,r&&te(n,u)&&r.forEach(function(a){var u=a[0];if(u){var n=e.$vm;if(n.$options.generic&&n.$parent&&n.$parent.$parent&&(n=n.$parent.$parent),"$emit"===u)return void n.$emit.apply(n,Kt(e.$vm,t,a[1],a[2],v,u));var r=n[u];if(!d(r))throw new Error(" _vm.".concat(u," is not a function"));if(i){if(r.once)return;r.once=!0}l.push(r.apply(n,Kt(e.$vm,t,a[1],a[2],v,u)))}})}),"input"===n&&1===l.length&&"undefined"!==typeof l[0]?l[0]:void 0}var ae=["onShow","onHide","onError","onPageNotFound"];function ue(t,e){var a=e.mocks,n=e.initRefs;t.$options.store&&(u.default.prototype.$store=t.$options.store),u.default.prototype.mpHost="app-plus",u.default.mixin({beforeCreate:function(){this.$options.mpType&&(this.mpType=this.$options.mpType,this.$mp=o({data:{}},this.mpType,this.$options.mpInstance),this.$scope=this.$options.mpInstance,delete this.$options.mpType,delete this.$options.mpInstance,"app"!==this.mpType&&(n(this),It(this,a)))}});var l={onLaunch:function(e){this.$vm||(this.$vm=t,this.$vm.$mp={app:this},this.$vm.$scope=this,this.$vm.globalData=this.globalData,this.$vm._isMounted=!0,this.$vm.__call_hook("mounted",e),this.$vm.__call_hook("onLaunch",e))}};l.globalData=t.$options.globalData||{};var r=t.$options.methods;return r&&Object.keys(r).forEach(function(t){l[t]=r[t]}),Lt(l,ae),l}var ne=["__route__","__wxExparserNodeId__","__wxWebviewId__"];function le(t,e){var a=t.$children,u=a.find(function(t){return t.$scope._$vueId===e});if(u)return u;for(var n=a.length-1;n>=0;n--)if(u=le(a[n],e),u)return u}function re(t){return Behavior(t)}function ve(){return!!this.route}function ie(t){this.triggerEvent("__l",t)}function oe(t){var e=t.$scope;Object.defineProperty(t,"$refs",{get:function(){var t={},a=e.selectAllComponents(".vue-ref");a.forEach(function(e){var a=e.dataset.ref;t[a]=e.$vm||e});var u=e.selectAllComponents(".vue-ref-in-for");return u.forEach(function(e){var a=e.dataset.ref;t[a]||(t[a]=[]),t[a].push(e.$vm||e)}),t}})}function xe(t){var e,a=t.detail||t.value,u=a.vuePid,n=a.vueOptions;u&&(e=le(this.$vm,u)),e||(e=this.$vm),n.parent=e}function ce(t){return ue(t,{mocks:ne,initRefs:oe})}var se=["onUniNViewMessage"];function fe(t){var e=ce(t);return Lt(e,se),e}function pe(t){return App(fe(t)),t}function he(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=e.isPage,n=e.initRelation,r=Mt(u.default,t),v=l(r,2),i=v[0],o=v[1],x={multipleSlots:!0,addGlobalClass:!0},c={options:x,data:Ht(o,u.default.prototype),behaviors:Vt(o,re),properties:Xt(o.props,!1,o.__file),lifetimes:{attached:function(){var t=this.properties,e={mpType:a.call(this)?"page":"component",mpInstance:this,propsData:t};Bt(t.vueId,this),n.call(this,{vuePid:this._$vuePid,vueOptions:e}),this.$vm=new i(e),Nt(this.$vm,t.vueSlots),this.$vm.$mount()},ready:function(){this.$vm&&(this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onReady"))},detached:function(){this.$vm.$destroy()}},pageLifetimes:{show:function(t){this.$vm&&this.$vm.__call_hook("onPageShow",t)},hide:function(){this.$vm&&this.$vm.__call_hook("onPageHide")},resize:function(t){this.$vm&&this.$vm.__call_hook("onPageResize",t)}},methods:{__l:xe,__e:ee}};return Array.isArray(o.wxsCallMethods)&&o.wxsCallMethods.forEach(function(t){c.methods[t]=function(e){return this.$vm[t](e)}}),a?c:[c,i]}function de(t){return he(t,{isPage:ve,initRelation:ie})}function ye(t){var e=de(t);return e.methods.$getAppWebview=function(){return plus.webview.getWebviewById("".concat(this.__wxWebviewId__))},e}var ge=["onShow","onHide","onUnload"];function _e(t,e){e.isPage,e.initRelation;var a=ye(t);return Lt(a.methods,ge,t),a.methods.onLoad=function(t){this.$vm.$mp.query=t,this.$vm.__call_hook("onLoad",t)},a}function be(t){return _e(t,{isPage:ve,initRelation:ie})}ge.push.apply(ge,Dt);var we=["onBackPress","onNavigationBarButtonTap","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked"];function me(t){var e=be(t);return Lt(e.methods,we),e}function Oe(t){return Component(me(t))}function ke(t){return Component(ye(t))}vt.forEach(function(t){rt[t]=!1}),it.forEach(function(t){var e=rt[t]&&rt[t].name?rt[t].name:t;wx.canIUse(e)||(rt[t]=!1)});var je={};Object.keys(lt).forEach(function(t){je[t]=lt[t]}),Object.keys(Ot).forEach(function(t){je[t]=Ot[t]}),Object.keys(At).forEach(function(t){je[t]=Y(t,At[t])}),Object.keys(wx).forEach(function(t){(_(wx,t)||_(rt,t))&&(je[t]=Y(t,ft(t,wx[t])))}),"undefined"!==typeof t&&(t.uni=je,t.UniEmitter=Ot),wx.createApp=pe,wx.createPage=Oe,wx.createComponent=ke;var Se=je,Ae=Se;e.default=Ae}).call(this,a("c8ba"))},"6fae":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=l(a("a34a")),n=l(a("c663"));function l(t){return t&&t.__esModule?t:{default:t}}function r(t,e,a,u,n,l,r){try{var v=t[l](r),i=v.value}catch(o){return void a(o)}v.done?e(i):Promise.resolve(i).then(u,n)}function v(t){return function(){var e=this,a=arguments;return new Promise(function(u,n){var l=t.apply(e,a);function v(t){r(l,u,n,v,i,"next",t)}function i(t){r(l,u,n,v,i,"throw",t)}v(void 0)})}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var a=0;a<e.length;a++){var u=e[a];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(t,u.key,u)}}function x(t,e,a){return e&&o(t.prototype,e),a&&o(t,a),t}function c(t,e){return!e||"object"!==typeof e&&"function"!==typeof e?s(t):e}function s(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function f(t){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},f(t)}function p(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}function h(t,e){return h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},h(t,e)}var d=function(t){function e(){return i(this,e),c(this,f(e).apply(this,arguments))}return p(e,t),x(e,[{key:"merchantsInfo",value:function(){var t=v(u.default.mark(function t(e){return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.api.get({url:this.config.ajaxUrl.urlList.merchantsInfo,data:e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()},{key:"merchantsIndexTan",value:function(){var t=v(u.default.mark(function t(e){return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.api.get({url:this.config.ajaxUrl.urlList.merchantsIndexTan,data:e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()},{key:"merchantsGoods",value:function(){var t=v(u.default.mark(function t(e){return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.api.get({url:this.config.ajaxUrl.urlList.merchantsGoods,data:e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()},{key:"merchantsDynamic",value:function(){var t=v(u.default.mark(function t(e){return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.api.get({url:this.config.ajaxUrl.urlList.merchantsDynamic,data:e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()},{key:"merchantActivityDynamic",value:function(){var t=v(u.default.mark(function t(e){return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.api.get({url:this.config.ajaxUrl.urlList.merchantActivityDynamic,data:e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()},{key:"merchantMJX",value:function(){var t=v(u.default.mark(function t(e){return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.api.get({url:this.config.ajaxUrl.urlList.merchantMJX,data:e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()}]),e}(n.default);e.default=d},"6fe9":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=l(a("a34a")),n=l(a("c663"));function l(t){return t&&t.__esModule?t:{default:t}}function r(t,e,a,u,n,l,r){try{var v=t[l](r),i=v.value}catch(o){return void a(o)}v.done?e(i):Promise.resolve(i).then(u,n)}function v(t){return function(){var e=this,a=arguments;return new Promise(function(u,n){var l=t.apply(e,a);function v(t){r(l,u,n,v,i,"next",t)}function i(t){r(l,u,n,v,i,"throw",t)}v(void 0)})}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var a=0;a<e.length;a++){var u=e[a];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(t,u.key,u)}}function x(t,e,a){return e&&o(t.prototype,e),a&&o(t,a),t}function c(t,e){return!e||"object"!==typeof e&&"function"!==typeof e?s(t):e}function s(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function f(t){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},f(t)}function p(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}function h(t,e){return h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},h(t,e)}var d=function(t){function e(){return i(this,e),c(this,f(e).apply(this,arguments))}return p(e,t),x(e,[{key:"getWithdrawal",value:function(){var t=v(u.default.mark(function t(e){return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.api.get({url:this.config.ajaxUrl.urlList.getWithdrawal,data:e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()},{key:"withdrawalInfo",value:function(){var t=v(u.default.mark(function t(e){return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.api.get({url:this.config.ajaxUrl.urlList.withdrawalInfo,data:e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()},{key:"initiateWithdrawal",value:function(){var t=v(u.default.mark(function t(e){return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.api.post({url:this.config.ajaxUrl.urlList.initiateWithdrawal,data:e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()}]),e}(n.default);e.default=d},"705a":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=l(a("a34a")),n=l(a("c663"));function l(t){return t&&t.__esModule?t:{default:t}}function r(t,e,a,u,n,l,r){try{var v=t[l](r),i=v.value}catch(o){return void a(o)}v.done?e(i):Promise.resolve(i).then(u,n)}function v(t){return function(){var e=this,a=arguments;return new Promise(function(u,n){var l=t.apply(e,a);function v(t){r(l,u,n,v,i,"next",t)}function i(t){r(l,u,n,v,i,"throw",t)}v(void 0)})}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var a=0;a<e.length;a++){var u=e[a];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(t,u.key,u)}}function x(t,e,a){return e&&o(t.prototype,e),a&&o(t,a),t}function c(t,e){return!e||"object"!==typeof e&&"function"!==typeof e?s(t):e}function s(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function f(t){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},f(t)}function p(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}function h(t,e){return h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},h(t,e)}var d=function(t){function e(){return i(this,e),c(this,f(e).apply(this,arguments))}return p(e,t),x(e,[{key:"getClassificationLv1",value:function(){var t=v(u.default.mark(function t(e){return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.api.get({url:this.config.ajaxUrl.urlList.getClassificationLv1,data:e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()},{key:"getClassificationLv2",value:function(){var t=v(u.default.mark(function t(e){return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.api.get({url:this.config.ajaxUrl.urlList.getClassificationLv2,data:e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()}]),e}(n.default);e.default=d},8189:function(t){t.exports={_from:"@dcloudio/uni-stat@^2.0.0-alpha-24420191128001",_id:"@dcloudio/uni-stat@2.0.0-v3-24020191018001",_inBundle:!1,_integrity:"sha512-nYBm5pRrYzrj2dKMqucWSF2PwInUMnn3MLHM/ik3gnLUEKSW61rzcY1RPlUwaH7c+Snm6N+bAJzmj3GvlrlVXA==",_location:"/@dcloudio/uni-stat",_phantomChildren:{},_requested:{type:"range",registry:!0,raw:"@dcloudio/uni-stat@^2.0.0-alpha-24420191128001",name:"@dcloudio/uni-stat",escapedName:"@dcloudio%2funi-stat",scope:"@dcloudio",rawSpec:"^2.0.0-alpha-24420191128001",saveSpec:null,fetchSpec:"^2.0.0-alpha-24420191128001"},_requiredBy:["/","/@dcloudio/vue-cli-plugin-uni"],_resolved:"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-v3-24020191018001.tgz",_shasum:"6ef04326cc0b945726413eebe442ab8f47c7536c",_spec:"@dcloudio/uni-stat@^2.0.0-alpha-24420191128001",_where:"/Users/guoshengqiang/Documents/dcloud-plugins/alpha/uniapp-cli",author:"",bugs:{url:"https://github.com/dcloudio/uni-app/issues"},bundleDependencies:!1,deprecated:!1,description:"",devDependencies:{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5",eslint:"^6.1.0",rollup:"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},files:["dist","package.json","LICENSE"],gitHead:"197e8df53cc9d4c3f6eb722b918ccf51672b5cfe",homepage:"https://github.com/dcloudio/uni-app#readme",license:"Apache-2.0",main:"dist/index.js",name:"@dcloudio/uni-stat",repository:{type:"git",url:"git+https://github.com/dcloudio/uni-app.git",directory:"packages/uni-stat"},scripts:{build:"NODE_ENV=production rollup -c rollup.config.js",dev:"NODE_ENV=development rollup -w -c rollup.config.js"},version:"2.0.0-v3-24020191018001"}},"8de5":function(t,e,a){},"921b":function(t,e,a){"use strict";(function(t){var e=a("8189");function u(t,e){return!e||"object"!==typeof e&&"function"!==typeof e?n(t):e}function n(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function l(t){return l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},l(t)}function r(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&v(t,e)}function v(t,e){return v=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},v(t,e)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var a=0;a<e.length;a++){var u=e[a];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(t,u.key,u)}}function x(t,e,a){return e&&o(t.prototype,e),a&&o(t,a),t}var c=e.version,s="https://tongji.dcloud.io/uni/stat",f="https://tongji.dcloud.io/uni/stat.gif",p=1800,h=300,d=10,y="__DC_STAT_UUID",g="__DC_UUID_VALUE";function _(){var e="";if("n"===O()){try{e=plus.runtime.getDCloudId()}catch(a){e=""}return e}try{e=t.getStorageSync(y)}catch(a){e=g}if(!e){e=Date.now()+""+Math.floor(1e7*Math.random());try{t.setStorageSync(y,e)}catch(a){t.setStorageSync(y,g)}}return e}var b=function(t){var e=Object.keys(t),a=e.sort(),u={},n="";for(var l in a)u[a[l]]=t[a[l]],n+=a[l]+"="+t[a[l]]+"&";return{sign:"",options:n.substr(0,n.length-1)}},w=function(t){var e="";for(var a in t)e+=a+"="+t[a]+"&";return e.substr(0,e.length-1)},m=function(){return parseInt((new Date).getTime()/1e3)},O=function(){var t={"app-plus":"n",h5:"h5","mp-weixin":"wx","mp-alipay":"ali","mp-baidu":"bd","mp-toutiao":"tt","mp-qq":"qq"};return t["app-plus"]},k=function(){var e="";return"wx"!==O()&&"qq"!==O()||t.canIUse("getAccountInfoSync")&&(e=t.getAccountInfoSync().miniProgram.appId||""),e},j=function(){return"n"===O()?plus.runtime.version:""},S=function(){var t=O(),e="";return"n"===t&&(e=plus.runtime.channel),e},A=function(e){var a=O(),u="";return e||("wx"===a&&(u=t.getLaunchOptionsSync().scene),u)},E="First__Visit__Time",P="Last__Visit__Time",$=function(){var e=t.getStorageSync(E),a=0;return e?a=e:(a=m(),t.setStorageSync(E,a),t.removeStorageSync(P)),a},T=function(){var e=t.getStorageSync(P),a=0;return a=e||"",t.setStorageSync(P,m()),a},R="__page__residence__time",C=0,D=0,I=function(){return C=m(),"n"===O()&&t.setStorageSync(R,m()),C},U=function(){return D=m(),"n"===O()&&(C=t.getStorageSync(R)),D-C},L="Total__Visit__Count",M=function(){var e=t.getStorageSync(L),a=1;return e&&(a=e,a++),t.setStorageSync(L,a),a},N=function(t){var e={};for(var a in t)e[a]=encodeURIComponent(t[a]);return e},B=0,H=0,F=function(){var t=(new Date).getTime();return B=t,H=0,t},q=function(){var t=(new Date).getTime();return H=t,t},V=function(t){var e=0;if(0!==B&&(e=H-B),e=parseInt(e/1e3),e=e<1?1:e,"app"===t){var a=e>h;return{residenceTime:e,overtime:a}}if("page"===t){var u=e>p;return{residenceTime:e,overtime:u}}return{residenceTime:e}},W=function(){var t=getCurrentPages(),e=t[t.length-1],a=e.$vm;return"bd"===O()?a.$mp&&a.$mp.page.is:a.$scope&&a.$scope.route||a.$mp&&a.$mp.page.route},X=function(t){var e=getCurrentPages(),a=e[e.length-1],u=a.$vm,n=t._query,l=n&&"{}"!==JSON.stringify(n)?"?"+JSON.stringify(n):"";return t._query="","bd"===O()?u.$mp&&u.$mp.page.is+l:u.$scope&&u.$scope.route+l||u.$mp&&u.$mp.page.route+l},z=function(t){return!!("page"===t.mpType||t.$mp&&"page"===t.$mp.mpType||"page"===t.$options.mpType)},J=function(t,e){return t?"string"!==typeof t?(console.error("uni.report [eventName] 参数类型错误,只能为 String 类型"),!0):t.length>255?(console.error("uni.report [eventName] 参数长度不能大于 255"),!0):"string"!==typeof e&&"object"!==typeof e?(console.error("uni.report [options] 参数类型错误,只能为 String 或 Object 类型"),!0):"string"===typeof e&&e.length>255?(console.error("uni.report [options] 参数长度不能大于 255"),!0):"title"===t&&"string"!==typeof e?(console.error("uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型"),!0):void 0:(console.error("uni.report 缺少 [eventName] 参数"),!0)},G=a("9c03").default,Y=a("3577").default||a("3577"),K=t.getSystemInfoSync(),Z=function(){function e(){i(this,e),this.self="",this._retry=0,this._platform="",this._query={},this._navigationBarTitle={config:"",page:"",report:"",lt:""},this._operatingTime=0,this._reportingRequestData={1:[],11:[]},this.__prevent_triggering=!1,this.__licationHide=!1,this.__licationShow=!1,this._lastPageRoute="",this.statData={uuid:_(),ut:O(),mpn:k(),ak:Y.appid,usv:c,v:j(),ch:S(),cn:"",pn:"",ct:"",t:m(),tt:"",p:"android"===K.platform?"a":"i",brand:K.brand||"",md:K.model,sv:K.system.replace(/(Android|iOS)\s/,""),mpsdk:K.SDKVersion||"",mpv:K.version||"",lang:K.language,pr:K.pixelRatio,ww:K.windowWidth,wh:K.windowHeight,sw:K.screenWidth,sh:K.screenHeight}}return x(e,[{key:"_applicationShow",value:function(){if(this.__licationHide){q();var t=V("app");if(t.overtime){var e={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(e)}this.__licationHide=!1}}},{key:"_applicationHide",value:function(t,e){this.__licationHide=!0,q();var a=V();F();var u=X(this);this._sendHideRequest({urlref:u,urlref_ts:a.residenceTime},e)}},{key:"_pageShow",value:function(){var t=X(this),e=W();if(this._navigationBarTitle.config=G&&G.pages[e]&&G.pages[e].titleNView&&G.pages[e].titleNView.titleText||G&&G.pages[e]&&G.pages[e].navigationBarTitleText||"",this.__licationShow)return F(),this.__licationShow=!1,void(this._lastPageRoute=t);q(),this._lastPageRoute=t;var a=V("page");if(a.overtime){var u={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(u)}F()}},{key:"_pageHide",value:function(){if(!this.__licationHide){q();var t=V("page");return this._sendPageRequest({url:this._lastPageRoute,urlref:this._lastPageRoute,urlref_ts:t.residenceTime}),void(this._navigationBarTitle={config:"",page:"",report:"",lt:""})}}},{key:"_login",value:function(){this._sendEventRequest({key:"login"},0)}},{key:"_share",value:function(){this._sendEventRequest({key:"share"},0)}},{key:"_payment",value:function(t){this._sendEventRequest({key:t},0)}},{key:"_sendReportRequest",value:function(t){this._navigationBarTitle.lt="1";var e=t.query&&"{}"!==JSON.stringify(t.query)?"?"+JSON.stringify(t.query):"";this.statData.lt="1",this.statData.url=t.path+e||"",this.statData.t=m(),this.statData.sc=A(t.scene),this.statData.fvts=$(),this.statData.lvts=T(),this.statData.tvc=M(),"n"===O()?this.getProperty():this.getNetworkInfo()}},{key:"_sendPageRequest",value:function(t){var e=t.url,a=t.urlref,u=t.urlref_ts;this._navigationBarTitle.lt="11";var n={ak:this.statData.ak,uuid:this.statData.uuid,lt:"11",ut:this.statData.ut,url:e,tt:this.statData.tt,urlref:a,urlref_ts:u,ch:this.statData.ch,usv:this.statData.usv,t:m(),p:this.statData.p};this.request(n)}},{key:"_sendHideRequest",value:function(t,e){var a=t.urlref,u=t.urlref_ts,n={ak:this.statData.ak,uuid:this.statData.uuid,lt:"3",ut:this.statData.ut,urlref:a,urlref_ts:u,ch:this.statData.ch,usv:this.statData.usv,t:m(),p:this.statData.p};this.request(n,e)}},{key:"_sendEventRequest",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.key,a=void 0===e?"":e,u=t.value,n=void 0===u?"":u,l=this._lastPageRoute,r={ak:this.statData.ak,uuid:this.statData.uuid,lt:"21",ut:this.statData.ut,url:l,ch:this.statData.ch,e_n:a,e_v:"object"===typeof n?JSON.stringify(n):n.toString(),usv:this.statData.usv,t:m(),p:this.statData.p};this.request(r)}},{key:"getNetworkInfo",value:function(){var e=this;t.getNetworkType({success:function(t){e.statData.net=t.networkType,e.getLocation()}})}},{key:"getProperty",value:function(){var t=this;plus.runtime.getProperty(plus.runtime.appid,function(e){t.statData.v=e.version||"",t.getNetworkInfo()})}},{key:"getLocation",value:function(){var e=this;Y.getLocation?t.getLocation({type:"wgs84",geocode:!0,success:function(t){t.address&&(e.statData.cn=t.address.country,e.statData.pn=t.address.province,e.statData.ct=t.address.city),e.statData.lat=t.latitude,e.statData.lng=t.longitude,e.request(e.statData)}}):(this.statData.lat=0,this.statData.lng=0,this.request(this.statData))}},{key:"request",value:function(e,a){var u=this,n=m(),l=this._navigationBarTitle;e.ttn=l.page,e.ttpj=l.config,e.ttc=l.report;var r=this._reportingRequestData;if("n"===O()&&(r=t.getStorageSync("__UNI__STAT__DATA")||{}),r[e.lt]||(r[e.lt]=[]),r[e.lt].push(e),"n"===O()&&t.setStorageSync("__UNI__STAT__DATA",r),!(U()<d)||a){var v=this._reportingRequestData;"n"===O()&&(v=t.getStorageSync("__UNI__STAT__DATA")),I();var i=[],o=[],x=[],s=function(t){var e=v[t];e.forEach(function(e){var a=w(e);0===t?i.push(a):3===t?x.push(a):o.push(a)})};for(var f in v)s(f);i.push.apply(i,o.concat(x));var p={usv:c,t:n,requests:JSON.stringify(i)};this._reportingRequestData={},"n"===O()&&t.removeStorageSync("__UNI__STAT__DATA"),"h5"!==e.ut?"n"!==O()||"a"!==this.statData.p?this._sendRequest(p):setTimeout(function(){u._sendRequest(p)},200):this.imageRequest(p)}}},{key:"_sendRequest",value:function(e){var a=this;t.request({url:s,method:"POST",data:e,success:function(){},fail:function(t){++a._retry<3&&setTimeout(function(){a._sendRequest(e)},1e3)}})}},{key:"imageRequest",value:function(t){var e=new Image,a=b(N(t)).options;e.src=f+"?"+a}},{key:"sendEvent",value:function(t,e){J(t,e)||("title"!==t?this._sendEventRequest({key:t,value:"object"===typeof e?JSON.stringify(e):e},1):this._navigationBarTitle.report=e)}}]),e}(),Q=function(e){function a(){var e;return i(this,a),e=u(this,l(a).call(this)),e.instance=null,"function"===typeof t.addInterceptor&&(e.addInterceptorInit(),e.interceptLogin(),e.interceptShare(!0),e.interceptRequestPayment()),e}return r(a,e),x(a,null,[{key:"getInstance",value:function(){return this.instance||(this.instance=new a),this.instance}}]),x(a,[{key:"addInterceptorInit",value:function(){var e=this;t.addInterceptor("setNavigationBarTitle",{invoke:function(t){e._navigationBarTitle.page=t.title}})}},{key:"interceptLogin",value:function(){var e=this;t.addInterceptor("login",{complete:function(){e._login()}})}},{key:"interceptShare",value:function(e){var a=this;e?t.addInterceptor("share",{success:function(){a._share()},fail:function(){a._share()}}):a._share()}},{key:"interceptRequestPayment",value:function(){var e=this;t.addInterceptor("requestPayment",{success:function(){e._payment("pay_success")},fail:function(){e._payment("pay_fail")}})}},{key:"report",value:function(t,e){this.self=e,I(),this.__licationShow=!0,this._sendReportRequest(t,!0)}},{key:"load",value:function(t,e){if(!e.$scope&&!e.$mp){var a=getCurrentPages();e.$scope=a[a.length-1]}this.self=e,this._query=t}},{key:"show",value:function(t){this.self=t,z(t)?this._pageShow(t):this._applicationShow(t)}},{key:"ready",value:function(t){}},{key:"hide",value:function(t){this.self=t,z(t)?this._pageHide(t):this._applicationHide(t,!0)}},{key:"error",value:function(t){this._platform;var e="";e=t.message?t.stack:JSON.stringify(t);var a={ak:this.statData.ak,uuid:this.statData.uuid,lt:"31",ut:this.statData.ut,ch:this.statData.ch,mpsdk:this.statData.mpsdk,mpv:this.statData.mpv,v:this.statData.v,em:e,usv:this.statData.usv,t:m(),p:this.statData.p};this.request(a)}}]),a}(Z),tt=Q.getInstance(),et=!1,at={onLaunch:function(t){tt.report(t,this)},onReady:function(){tt.ready(this)},onLoad:function(t){if(tt.load(t,this),this.$scope&&this.$scope.onShareAppMessage){var e=this.$scope.onShareAppMessage;this.$scope.onShareAppMessage=function(t){return tt.interceptShare(!1),e.call(this,t)}}},onShow:function(){et=!1,tt.show(this)},onHide:function(){et=!0,tt.hide(this)},onUnload:function(){et?et=!1:tt.hide(this)},onError:function(t){tt.error(t)}};function ut(){var e=a("66fd");(e.default||e).mixin(at),t.report=function(t,e){tt.sendEvent(t,e)}}ut()}).call(this,a("6e42")["default"])},"96cf":function(t,e){!function(e){"use strict";var a,u=Object.prototype,n=u.hasOwnProperty,l="function"===typeof Symbol?Symbol:{},r=l.iterator||"@@iterator",v=l.asyncIterator||"@@asyncIterator",i=l.toStringTag||"@@toStringTag",o="object"===typeof t,x=e.regeneratorRuntime;if(x)o&&(t.exports=x);else{x=e.regeneratorRuntime=o?t.exports:{},x.wrap=b;var c="suspendedStart",s="suspendedYield",f="executing",p="completed",h={},d={};d[r]=function(){return this};var y=Object.getPrototypeOf,g=y&&y(y(R([])));g&&g!==u&&n.call(g,r)&&(d=g);var _=k.prototype=m.prototype=Object.create(d);O.prototype=_.constructor=k,k.constructor=O,k[i]=O.displayName="GeneratorFunction",x.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===O||"GeneratorFunction"===(e.displayName||e.name))},x.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,k):(t.__proto__=k,i in t||(t[i]="GeneratorFunction")),t.prototype=Object.create(_),t},x.awrap=function(t){return{__await:t}},j(S.prototype),S.prototype[v]=function(){return this},x.AsyncIterator=S,x.async=function(t,e,a,u){var n=new S(b(t,e,a,u));return x.isGeneratorFunction(e)?n:n.next().then(function(t){return t.done?t.value:n.next()})},j(_),_[i]="Generator",_[r]=function(){return this},_.toString=function(){return"[object Generator]"},x.keys=function(t){var e=[];for(var a in t)e.push(a);return e.reverse(),function a(){while(e.length){var u=e.pop();if(u in t)return a.value=u,a.done=!1,a}return a.done=!0,a}},x.values=R,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=a,this.done=!1,this.delegate=null,this.method="next",this.arg=a,this.tryEntries.forEach($),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=a)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function u(u,n){return v.type="throw",v.arg=t,e.next=u,n&&(e.method="next",e.arg=a),!!n}for(var l=this.tryEntries.length-1;l>=0;--l){var r=this.tryEntries[l],v=r.completion;if("root"===r.tryLoc)return u("end");if(r.tryLoc<=this.prev){var i=n.call(r,"catchLoc"),o=n.call(r,"finallyLoc");if(i&&o){if(this.prev<r.catchLoc)return u(r.catchLoc,!0);if(this.prev<r.finallyLoc)return u(r.finallyLoc)}else if(i){if(this.prev<r.catchLoc)return u(r.catchLoc,!0)}else{if(!o)throw new Error("try statement without catch or finally");if(this.prev<r.finallyLoc)return u(r.finallyLoc)}}}},abrupt:function(t,e){for(var a=this.tryEntries.length-1;a>=0;--a){var u=this.tryEntries[a];if(u.tryLoc<=this.prev&&n.call(u,"finallyLoc")&&this.prev<u.finallyLoc){var l=u;break}}l&&("break"===t||"continue"===t)&&l.tryLoc<=e&&e<=l.finallyLoc&&(l=null);var r=l?l.completion:{};return r.type=t,r.arg=e,l?(this.method="next",this.next=l.finallyLoc,h):this.complete(r)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.finallyLoc===t)return this.complete(a.completion,a.afterLoc),$(a),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var a=this.tryEntries[e];if(a.tryLoc===t){var u=a.completion;if("throw"===u.type){var n=u.arg;$(a)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,u){return this.delegate={iterator:R(t),resultName:e,nextLoc:u},"next"===this.method&&(this.arg=a),h}}}function b(t,e,a,u){var n=e&&e.prototype instanceof m?e:m,l=Object.create(n.prototype),r=new T(u||[]);return l._invoke=A(t,a,r),l}function w(t,e,a){try{return{type:"normal",arg:t.call(e,a)}}catch(u){return{type:"throw",arg:u}}}function m(){}function O(){}function k(){}function j(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function S(t){function e(a,u,l,r){var v=w(t[a],t,u);if("throw"!==v.type){var i=v.arg,o=i.value;return o&&"object"===typeof o&&n.call(o,"__await")?Promise.resolve(o.__await).then(function(t){e("next",t,l,r)},function(t){e("throw",t,l,r)}):Promise.resolve(o).then(function(t){i.value=t,l(i)},function(t){return e("throw",t,l,r)})}r(v.arg)}var a;function u(t,u){function n(){return new Promise(function(a,n){e(t,u,a,n)})}return a=a?a.then(n,n):n()}this._invoke=u}function A(t,e,a){var u=c;return function(n,l){if(u===f)throw new Error("Generator is already running");if(u===p){if("throw"===n)throw l;return C()}a.method=n,a.arg=l;while(1){var r=a.delegate;if(r){var v=E(r,a);if(v){if(v===h)continue;return v}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(u===c)throw u=p,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);u=f;var i=w(t,e,a);if("normal"===i.type){if(u=a.done?p:s,i.arg===h)continue;return{value:i.arg,done:a.done}}"throw"===i.type&&(u=p,a.method="throw",a.arg=i.arg)}}}function E(t,e){var u=t.iterator[e.method];if(u===a){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=a,E(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=w(u,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,h;var l=n.arg;return l?l.done?(e[t.resultName]=l.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=a),e.delegate=null,h):l:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function $(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function R(t){if(t){var e=t[r];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var u=-1,l=function e(){while(++u<t.length)if(n.call(t,u))return e.value=t[u],e.done=!1,e;return e.value=a,e.done=!0,e};return l.next=l}}return{next:C}}function C(){return{value:a,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},9786:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=l(a("a34a")),n=l(a("c663"));function l(t){return t&&t.__esModule?t:{default:t}}function r(t,e,a,u,n,l,r){try{var v=t[l](r),i=v.value}catch(o){return void a(o)}v.done?e(i):Promise.resolve(i).then(u,n)}function v(t){return function(){var e=this,a=arguments;return new Promise(function(u,n){var l=t.apply(e,a);function v(t){r(l,u,n,v,i,"next",t)}function i(t){r(l,u,n,v,i,"throw",t)}v(void 0)})}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var a=0;a<e.length;a++){var u=e[a];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(t,u.key,u)}}function x(t,e,a){return e&&o(t.prototype,e),a&&o(t,a),t}function c(t,e){return!e||"object"!==typeof e&&"function"!==typeof e?s(t):e}function s(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function f(t){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},f(t)}function p(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}function h(t,e){return h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},h(t,e)}var d=function(t){function e(){return i(this,e),c(this,f(e).apply(this,arguments))}return p(e,t),x(e,[{key:"addCart",value:function(){var t=v(u.default.mark(function t(e){return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.api.post({url:this.config.ajaxUrl.urlList.addCart,data:e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()},{key:"getCart",value:function(){var t=v(u.default.mark(function t(e){return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.api.post({url:this.config.ajaxUrl.urlList.getCart,data:e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()},{key:"setAmount",value:function(){var t=v(u.default.mark(function t(e){return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.api.post({url:this.config.ajaxUrl.urlList.setAmount,data:e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()},{key:"checkall",value:function(){var t=v(u.default.mark(function t(e){return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.api.post({url:this.config.ajaxUrl.urlList.checkall,data:e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()},{key:"deleteCart",value:function(){var t=v(u.default.mark(function t(e){return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.api.post({url:this.config.ajaxUrl.urlList.deleteCart,data:e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()}]),e}(n.default);e.default=d},"9c03":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u={pages:{"pages/index/index":{navigationStyle:"custom",navigationBarTitleText:"首页"},"pages/classification/classification":{navigationStyle:"custom",navigationBarTitleText:"分类"},"pages/home/home":{navigationStyle:"custom",navigationBarTitleText:"我的"},"pages/login/login":{navigationStyle:"custom",navigationBarTitleText:"登陆"},"pages/register/register":{navigationStyle:"custom",navigationBarTitleText:"注册"},"pages/install/install":{navigationStyle:"custom",navigationBarTitleText:"设置"},"pages/bill/bill":{navigationStyle:"custom",navigationBarTitleText:"全部账单"},"pages/bill/billInfo":{navigationStyle:"custom",navigationBarTitleText:"账单详情"},"pages/transfer/transfer":{navigationStyle:"custom",navigationBarTitleText:"转账记录"},"pages/transfer/transferInfo":{navigationStyle:"custom",navigationBarTitleText:"转账详情"},"pages/withdrawal/withdrawal":{navigationStyle:"custom",navigationBarTitleText:"提现记录"},"pages/withdrawal/withdrawalInfo":{navigationStyle:"custom",navigationBarTitleText:"提现详情"},"pages/news/news":{navigationStyle:"custom",navigationBarTitleText:"新闻"},"pages/news/newsInfo":{navigationStyle:"custom",navigationBarTitleText:"新闻详情"},"pages/cart/cart":{navigationStyle:"custom",navigationBarTitleText:"购物车"},"pages/index/test":{navigationStyle:"custom",navigationBarTitleText:"测试"},"pages/category/category":{navigationStyle:"custom",navigationBarTitleText:"热销排行"},"pages/category/ranking":{navigationStyle:"custom",navigationBarTitleText:"列表"},"pages/goodsInfo/goodsInfo":{navigationStyle:"custom",navigationBarTitleText:"商品详情"},"pages/classification/classInfo":{navigationStyle:"custom",navigationBarTitleText:"家具家装"}},globalStyle:{navigationBarTextStyle:"black",navigationBarTitleText:"uni-app",navigationBarBackgroundColor:"#F8F8F8",backgroundColor:"#F8F8F8"}};e.default=u},a34a:function(t,e,a){t.exports=a("bbdd")},a373:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=l(a("a34a")),n=l(a("c663"));function l(t){return t&&t.__esModule?t:{default:t}}function r(t,e,a,u,n,l,r){try{var v=t[l](r),i=v.value}catch(o){return void a(o)}v.done?e(i):Promise.resolve(i).then(u,n)}function v(t){return function(){var e=this,a=arguments;return new Promise(function(u,n){var l=t.apply(e,a);function v(t){r(l,u,n,v,i,"next",t)}function i(t){r(l,u,n,v,i,"throw",t)}v(void 0)})}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var a=0;a<e.length;a++){var u=e[a];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(t,u.key,u)}}function x(t,e,a){return e&&o(t.prototype,e),a&&o(t,a),t}function c(t,e){return!e||"object"!==typeof e&&"function"!==typeof e?s(t):e}function s(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function f(t){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},f(t)}function p(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}function h(t,e){return h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},h(t,e)}var d=function(t){function e(){return i(this,e),c(this,f(e).apply(this,arguments))}return p(e,t),x(e,[{key:"getTransfer",value:function(){var t=v(u.default.mark(function t(e){return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.api.get({url:this.config.ajaxUrl.urlList.getTransfer,data:e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()},{key:"transferInfo",value:function(){var t=v(u.default.mark(function t(e){return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.api.get({url:this.config.ajaxUrl.urlList.transferInfo,data:e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()},{key:"initiateTransfer",value:function(){var t=v(u.default.mark(function t(e){return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.api.post({url:this.config.ajaxUrl.urlList.initiateTransfer,data:e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()}]),e}(n.default);e.default=d},a768:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=l(a("a34a")),n=l(a("c663"));function l(t){return t&&t.__esModule?t:{default:t}}function r(t,e,a,u,n,l,r){try{var v=t[l](r),i=v.value}catch(o){return void a(o)}v.done?e(i):Promise.resolve(i).then(u,n)}function v(t){return function(){var e=this,a=arguments;return new Promise(function(u,n){var l=t.apply(e,a);function v(t){r(l,u,n,v,i,"next",t)}function i(t){r(l,u,n,v,i,"throw",t)}v(void 0)})}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var a=0;a<e.length;a++){var u=e[a];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(t,u.key,u)}}function x(t,e,a){return e&&o(t.prototype,e),a&&o(t,a),t}function c(t,e){return!e||"object"!==typeof e&&"function"!==typeof e?s(t):e}function s(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function f(t){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},f(t)}function p(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}function h(t,e){return h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},h(t,e)}var d=function(t){function e(){return i(this,e),c(this,f(e).apply(this,arguments))}return p(e,t),x(e,[{key:"getMarchRase",value:function(){var t=v(u.default.mark(function t(e){return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.api.get({url:this.config.ajaxUrl.urlList.getMarchRase,data:e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()},{key:"getOverRase",value:function(){var t=v(u.default.mark(function t(e){return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.api.get({url:this.config.ajaxUrl.urlList.getOverRase,data:e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()},{key:"getSupportRase",value:function(){var t=v(u.default.mark(function t(e){return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.api.post({url:this.config.ajaxUrl.urlList.getSupportRase,data:e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()},{key:"raseListInfo",value:function(){var t=v(u.default.mark(function t(e){return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.api.post({url:this.config.ajaxUrl.urlList.raseListInfo,data:e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()},{key:"createRaseOrder",value:function(){var t=v(u.default.mark(function t(e){return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.api.post({url:this.config.ajaxUrl.urlList.createRaseOrder,data:e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()}]),e}(n.default);e.default=d},a77b:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u={contact:"",person:"",personadd:"","contact-filled":"","person-filled":"","personadd-filled":"",phone:"",email:"",chatbubble:"",chatboxes:"","phone-filled":"","email-filled":"","chatbubble-filled":"","chatboxes-filled":"",weibo:"",weixin:"",pengyouquan:"",chat:"",qq:"",videocam:"",camera:"",mic:"",location:"","mic-filled":"",speech:"","location-filled":"",micoff:"",image:"",map:"",compose:"",trash:"",upload:"",download:"",close:"",redo:"",undo:"",refresh:"",star:"",plus:"",minus:"",circle:"",checkbox:"","close-filled":"",clear:"","refresh-filled":"","star-filled":"","plus-filled":"","minus-filled":"","circle-filled":"","checkbox-filled":"",closeempty:"",refreshempty:"",reload:"",starhalf:"",spinner:"","spinner-cycle":"",search:"",plusempty:"",forward:"",back:"","left-nav":"",checkmarkempty:"",home:"",navigate:"",gear:"",paperplane:"",info:"",help:"",locked:"",more:"",flag:"","home-filled":"","gear-filled":"","info-filled":"","help-filled":"","more-filled":"",settings:"",list:"",bars:"",loop:"",paperclip:"",eye:"",arrowup:"",arrowdown:"",arrowleft:"",arrowright:"",arrowthinup:"",arrowthindown:"",arrowthinleft:"",arrowthinright:"",pulldown:"",closefill:"",sound:"",scan:""};e.default=u},aa70:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=l(a("a34a")),n=l(a("c663"));function l(t){return t&&t.__esModule?t:{default:t}}function r(t,e,a,u,n,l,r){try{var v=t[l](r),i=v.value}catch(o){return void a(o)}v.done?e(i):Promise.resolve(i).then(u,n)}function v(t){return function(){var e=this,a=arguments;return new Promise(function(u,n){var l=t.apply(e,a);function v(t){r(l,u,n,v,i,"next",t)}function i(t){r(l,u,n,v,i,"throw",t)}v(void 0)})}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var a=0;a<e.length;a++){var u=e[a];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(t,u.key,u)}}function x(t,e,a){return e&&o(t.prototype,e),a&&o(t,a),t}function c(t,e){return!e||"object"!==typeof e&&"function"!==typeof e?s(t):e}function s(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function f(t){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},f(t)}function p(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}function h(t,e){return h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},h(t,e)}var d=function(t){function e(){return i(this,e),c(this,f(e).apply(this,arguments))}return p(e,t),x(e,[{key:"allSite",value:function(){var t=v(u.default.mark(function t(e){return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.api.post({url:this.config.ajaxUrl.urlList.allSite,data:e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()},{key:"alterSite",value:function(){var t=v(u.default.mark(function t(e){return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.api.post({url:this.config.ajaxUrl.urlList.alterSite,data:e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()},{key:"deleteSite",value:function(){var t=v(u.default.mark(function t(e){return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.api.post({url:this.config.ajaxUrl.urlList.deleteSite,data:e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()},{key:"singleSite",value:function(){var t=v(u.default.mark(function t(e){return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.api.get({url:this.config.ajaxUrl.urlList.singleSite,data:e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()}]),e}(n.default);e.default=d},bbdd:function(t,e,a){var u=function(){return this||"object"===typeof self&&self}()||Function("return this")(),n=u.regeneratorRuntime&&Object.getOwnPropertyNames(u).indexOf("regeneratorRuntime")>=0,l=n&&u.regeneratorRuntime;if(u.regeneratorRuntime=void 0,t.exports=a("96cf"),n)u.regeneratorRuntime=l;else try{delete u.regeneratorRuntime}catch(r){u.regeneratorRuntime=void 0}},be19:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=l(a("a34a")),n=l(a("c663"));function l(t){return t&&t.__esModule?t:{default:t}}function r(t,e,a,u,n,l,r){try{var v=t[l](r),i=v.value}catch(o){return void a(o)}v.done?e(i):Promise.resolve(i).then(u,n)}function v(t){return function(){var e=this,a=arguments;return new Promise(function(u,n){var l=t.apply(e,a);function v(t){r(l,u,n,v,i,"next",t)}function i(t){r(l,u,n,v,i,"throw",t)}v(void 0)})}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var a=0;a<e.length;a++){var u=e[a];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(t,u.key,u)}}function x(t,e,a){return e&&o(t.prototype,e),a&&o(t,a),t}function c(t,e){return!e||"object"!==typeof e&&"function"!==typeof e?s(t):e}function s(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function f(t){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},f(t)}function p(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}function h(t,e){return h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},h(t,e)}var d=function(t){function e(){return i(this,e),c(this,f(e).apply(this,arguments))}return p(e,t),x(e,[{key:"getBill",value:function(){var t=v(u.default.mark(function t(e){return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.api.get({url:this.config.ajaxUrl.urlList.getBill,data:e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()},{key:"billInfo",value:function(){var t=v(u.default.mark(function t(e){return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.api.get({url:this.config.ajaxUrl.urlList.billInfo,data:e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()}]),e}(n.default);e.default=d},c663:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=l(a("327a")),n=l(a("ce8c"));function l(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var v=function t(){r(this,t),this.api=u.default,this.config=n.default};e.default=v},c7e0:function(module,exports,__webpack_require__){"use strict";(function(process,global){var __WEBPACK_AMD_DEFINE_RESULT__;
/**
 * [js-md5]{@link https://github.com/emn178/js-md5}
 *
 * @namespace md5
 * @version 0.7.3
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */
/**
 * [js-md5]{@link https://github.com/emn178/js-md5}
 *
 * @namespace md5
 * @version 0.7.3
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */
(function(){var ERROR="input is invalid type",WINDOW="object"===typeof window,root=WINDOW?window:{};root.JS_MD5_NO_WINDOW&&(WINDOW=!1);var WEB_WORKER=!WINDOW&&"object"===typeof self,NODE_JS=!root.JS_MD5_NO_NODE_JS&&"object"===typeof process&&process.versions&&process.versions.node;NODE_JS?root=global:WEB_WORKER&&(root=self);var COMMON_JS=!root.JS_MD5_NO_COMMON_JS&&"object"===typeof module&&module.exports,AMD=__webpack_require__("3c35"),ARRAY_BUFFER=!root.JS_MD5_NO_ARRAY_BUFFER&&"undefined"!==typeof ArrayBuffer,HEX_CHARS="0123456789abcdef".split(""),EXTRA=[128,32768,8388608,-2147483648],SHIFT=[0,8,16,24],OUTPUT_TYPES=["hex","array","digest","buffer","arrayBuffer","base64"],BASE64_ENCODE_CHAR="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),blocks=[],buffer8;if(ARRAY_BUFFER){var buffer=new ArrayBuffer(68);buffer8=new Uint8Array(buffer),blocks=new Uint32Array(buffer)}!root.JS_MD5_NO_NODE_JS&&Array.isArray||(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)}),!ARRAY_BUFFER||!root.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW&&ArrayBuffer.isView||(ArrayBuffer.isView=function(t){return"object"===typeof t&&t.buffer&&t.buffer.constructor===ArrayBuffer});var createOutputMethod=function(t){return function(e){return new Md5(!0).update(e)[t]()}},createMethod=function(){var t=createOutputMethod("hex");NODE_JS&&(t=nodeWrap(t)),t.create=function(){return new Md5},t.update=function(e){return t.create().update(e)};for(var e=0;e<OUTPUT_TYPES.length;++e){var a=OUTPUT_TYPES[e];t[a]=createOutputMethod(a)}return t},nodeWrap=function nodeWrap(method){var crypto=eval("require('crypto')"),Buffer=eval("require('buffer').Buffer"),nodeMethod=function(t){if("string"===typeof t)return crypto.createHash("md5").update(t,"utf8").digest("hex");if(null===t||void 0===t)throw ERROR;return t.constructor===ArrayBuffer&&(t=new Uint8Array(t)),Array.isArray(t)||ArrayBuffer.isView(t)||t.constructor===Buffer?crypto.createHash("md5").update(new Buffer(t)).digest("hex"):method(t)};return nodeMethod};function Md5(t){if(t)blocks[0]=blocks[16]=blocks[1]=blocks[2]=blocks[3]=blocks[4]=blocks[5]=blocks[6]=blocks[7]=blocks[8]=blocks[9]=blocks[10]=blocks[11]=blocks[12]=blocks[13]=blocks[14]=blocks[15]=0,this.blocks=blocks,this.buffer8=buffer8;else if(ARRAY_BUFFER){var e=new ArrayBuffer(68);this.buffer8=new Uint8Array(e),this.blocks=new Uint32Array(e)}else this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];this.h0=this.h1=this.h2=this.h3=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0}Md5.prototype.update=function(t){if(!this.finalized){var e,a=typeof t;if("string"!==a){if("object"!==a)throw ERROR;if(null===t)throw ERROR;if(ARRAY_BUFFER&&t.constructor===ArrayBuffer)t=new Uint8Array(t);else if(!Array.isArray(t)&&(!ARRAY_BUFFER||!ArrayBuffer.isView(t)))throw ERROR;e=!0}var u,n,l=0,r=t.length,v=this.blocks,i=this.buffer8;while(l<r){if(this.hashed&&(this.hashed=!1,v[0]=v[16],v[16]=v[1]=v[2]=v[3]=v[4]=v[5]=v[6]=v[7]=v[8]=v[9]=v[10]=v[11]=v[12]=v[13]=v[14]=v[15]=0),e)if(ARRAY_BUFFER)for(n=this.start;l<r&&n<64;++l)i[n++]=t[l];else for(n=this.start;l<r&&n<64;++l)v[n>>2]|=t[l]<<SHIFT[3&n++];else if(ARRAY_BUFFER)for(n=this.start;l<r&&n<64;++l)u=t.charCodeAt(l),u<128?i[n++]=u:u<2048?(i[n++]=192|u>>6,i[n++]=128|63&u):u<55296||u>=57344?(i[n++]=224|u>>12,i[n++]=128|u>>6&63,i[n++]=128|63&u):(u=65536+((1023&u)<<10|1023&t.charCodeAt(++l)),i[n++]=240|u>>18,i[n++]=128|u>>12&63,i[n++]=128|u>>6&63,i[n++]=128|63&u);else for(n=this.start;l<r&&n<64;++l)u=t.charCodeAt(l),u<128?v[n>>2]|=u<<SHIFT[3&n++]:u<2048?(v[n>>2]|=(192|u>>6)<<SHIFT[3&n++],v[n>>2]|=(128|63&u)<<SHIFT[3&n++]):u<55296||u>=57344?(v[n>>2]|=(224|u>>12)<<SHIFT[3&n++],v[n>>2]|=(128|u>>6&63)<<SHIFT[3&n++],v[n>>2]|=(128|63&u)<<SHIFT[3&n++]):(u=65536+((1023&u)<<10|1023&t.charCodeAt(++l)),v[n>>2]|=(240|u>>18)<<SHIFT[3&n++],v[n>>2]|=(128|u>>12&63)<<SHIFT[3&n++],v[n>>2]|=(128|u>>6&63)<<SHIFT[3&n++],v[n>>2]|=(128|63&u)<<SHIFT[3&n++]);this.lastByteIndex=n,this.bytes+=n-this.start,n>=64?(this.start=n-64,this.hash(),this.hashed=!0):this.start=n}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}},Md5.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var t=this.blocks,e=this.lastByteIndex;t[e>>2]|=EXTRA[3&e],e>=56&&(this.hashed||this.hash(),t[0]=t[16],t[16]=t[1]=t[2]=t[3]=t[4]=t[5]=t[6]=t[7]=t[8]=t[9]=t[10]=t[11]=t[12]=t[13]=t[14]=t[15]=0),t[14]=this.bytes<<3,t[15]=this.hBytes<<3|this.bytes>>>29,this.hash()}},Md5.prototype.hash=function(){var t,e,a,u,n,l,r=this.blocks;this.first?(t=r[0]-680876937,t=(t<<7|t>>>25)-271733879<<0,u=(-1732584194^2004318071&t)+r[1]-117830708,u=(u<<12|u>>>20)+t<<0,a=(-271733879^u&(-271733879^t))+r[2]-1126478375,a=(a<<17|a>>>15)+u<<0,e=(t^a&(u^t))+r[3]-1316259209,e=(e<<22|e>>>10)+a<<0):(t=this.h0,e=this.h1,a=this.h2,u=this.h3,t+=(u^e&(a^u))+r[0]-680876936,t=(t<<7|t>>>25)+e<<0,u+=(a^t&(e^a))+r[1]-389564586,u=(u<<12|u>>>20)+t<<0,a+=(e^u&(t^e))+r[2]+606105819,a=(a<<17|a>>>15)+u<<0,e+=(t^a&(u^t))+r[3]-1044525330,e=(e<<22|e>>>10)+a<<0),t+=(u^e&(a^u))+r[4]-176418897,t=(t<<7|t>>>25)+e<<0,u+=(a^t&(e^a))+r[5]+1200080426,u=(u<<12|u>>>20)+t<<0,a+=(e^u&(t^e))+r[6]-1473231341,a=(a<<17|a>>>15)+u<<0,e+=(t^a&(u^t))+r[7]-45705983,e=(e<<22|e>>>10)+a<<0,t+=(u^e&(a^u))+r[8]+1770035416,t=(t<<7|t>>>25)+e<<0,u+=(a^t&(e^a))+r[9]-1958414417,u=(u<<12|u>>>20)+t<<0,a+=(e^u&(t^e))+r[10]-42063,a=(a<<17|a>>>15)+u<<0,e+=(t^a&(u^t))+r[11]-1990404162,e=(e<<22|e>>>10)+a<<0,t+=(u^e&(a^u))+r[12]+1804603682,t=(t<<7|t>>>25)+e<<0,u+=(a^t&(e^a))+r[13]-40341101,u=(u<<12|u>>>20)+t<<0,a+=(e^u&(t^e))+r[14]-1502002290,a=(a<<17|a>>>15)+u<<0,e+=(t^a&(u^t))+r[15]+1236535329,e=(e<<22|e>>>10)+a<<0,t+=(a^u&(e^a))+r[1]-165796510,t=(t<<5|t>>>27)+e<<0,u+=(e^a&(t^e))+r[6]-1069501632,u=(u<<9|u>>>23)+t<<0,a+=(t^e&(u^t))+r[11]+643717713,a=(a<<14|a>>>18)+u<<0,e+=(u^t&(a^u))+r[0]-373897302,e=(e<<20|e>>>12)+a<<0,t+=(a^u&(e^a))+r[5]-701558691,t=(t<<5|t>>>27)+e<<0,u+=(e^a&(t^e))+r[10]+38016083,u=(u<<9|u>>>23)+t<<0,a+=(t^e&(u^t))+r[15]-660478335,a=(a<<14|a>>>18)+u<<0,e+=(u^t&(a^u))+r[4]-405537848,e=(e<<20|e>>>12)+a<<0,t+=(a^u&(e^a))+r[9]+568446438,t=(t<<5|t>>>27)+e<<0,u+=(e^a&(t^e))+r[14]-1019803690,u=(u<<9|u>>>23)+t<<0,a+=(t^e&(u^t))+r[3]-187363961,a=(a<<14|a>>>18)+u<<0,e+=(u^t&(a^u))+r[8]+1163531501,e=(e<<20|e>>>12)+a<<0,t+=(a^u&(e^a))+r[13]-1444681467,t=(t<<5|t>>>27)+e<<0,u+=(e^a&(t^e))+r[2]-51403784,u=(u<<9|u>>>23)+t<<0,a+=(t^e&(u^t))+r[7]+1735328473,a=(a<<14|a>>>18)+u<<0,e+=(u^t&(a^u))+r[12]-1926607734,e=(e<<20|e>>>12)+a<<0,n=e^a,t+=(n^u)+r[5]-378558,t=(t<<4|t>>>28)+e<<0,u+=(n^t)+r[8]-2022574463,u=(u<<11|u>>>21)+t<<0,l=u^t,a+=(l^e)+r[11]+1839030562,a=(a<<16|a>>>16)+u<<0,e+=(l^a)+r[14]-35309556,e=(e<<23|e>>>9)+a<<0,n=e^a,t+=(n^u)+r[1]-1530992060,t=(t<<4|t>>>28)+e<<0,u+=(n^t)+r[4]+1272893353,u=(u<<11|u>>>21)+t<<0,l=u^t,a+=(l^e)+r[7]-155497632,a=(a<<16|a>>>16)+u<<0,e+=(l^a)+r[10]-1094730640,e=(e<<23|e>>>9)+a<<0,n=e^a,t+=(n^u)+r[13]+681279174,t=(t<<4|t>>>28)+e<<0,u+=(n^t)+r[0]-358537222,u=(u<<11|u>>>21)+t<<0,l=u^t,a+=(l^e)+r[3]-722521979,a=(a<<16|a>>>16)+u<<0,e+=(l^a)+r[6]+76029189,e=(e<<23|e>>>9)+a<<0,n=e^a,t+=(n^u)+r[9]-640364487,t=(t<<4|t>>>28)+e<<0,u+=(n^t)+r[12]-421815835,u=(u<<11|u>>>21)+t<<0,l=u^t,a+=(l^e)+r[15]+530742520,a=(a<<16|a>>>16)+u<<0,e+=(l^a)+r[2]-995338651,e=(e<<23|e>>>9)+a<<0,t+=(a^(e|~u))+r[0]-198630844,t=(t<<6|t>>>26)+e<<0,u+=(e^(t|~a))+r[7]+1126891415,u=(u<<10|u>>>22)+t<<0,a+=(t^(u|~e))+r[14]-1416354905,a=(a<<15|a>>>17)+u<<0,e+=(u^(a|~t))+r[5]-57434055,e=(e<<21|e>>>11)+a<<0,t+=(a^(e|~u))+r[12]+1700485571,t=(t<<6|t>>>26)+e<<0,u+=(e^(t|~a))+r[3]-1894986606,u=(u<<10|u>>>22)+t<<0,a+=(t^(u|~e))+r[10]-1051523,a=(a<<15|a>>>17)+u<<0,e+=(u^(a|~t))+r[1]-2054922799,e=(e<<21|e>>>11)+a<<0,t+=(a^(e|~u))+r[8]+1873313359,t=(t<<6|t>>>26)+e<<0,u+=(e^(t|~a))+r[15]-30611744,u=(u<<10|u>>>22)+t<<0,a+=(t^(u|~e))+r[6]-1560198380,a=(a<<15|a>>>17)+u<<0,e+=(u^(a|~t))+r[13]+1309151649,e=(e<<21|e>>>11)+a<<0,t+=(a^(e|~u))+r[4]-145523070,t=(t<<6|t>>>26)+e<<0,u+=(e^(t|~a))+r[11]-1120210379,u=(u<<10|u>>>22)+t<<0,a+=(t^(u|~e))+r[2]+718787259,a=(a<<15|a>>>17)+u<<0,e+=(u^(a|~t))+r[9]-343485551,e=(e<<21|e>>>11)+a<<0,this.first?(this.h0=t+1732584193<<0,this.h1=e-271733879<<0,this.h2=a-1732584194<<0,this.h3=u+271733878<<0,this.first=!1):(this.h0=this.h0+t<<0,this.h1=this.h1+e<<0,this.h2=this.h2+a<<0,this.h3=this.h3+u<<0)},Md5.prototype.hex=function(){this.finalize();var t=this.h0,e=this.h1,a=this.h2,u=this.h3;return HEX_CHARS[t>>4&15]+HEX_CHARS[15&t]+HEX_CHARS[t>>12&15]+HEX_CHARS[t>>8&15]+HEX_CHARS[t>>20&15]+HEX_CHARS[t>>16&15]+HEX_CHARS[t>>28&15]+HEX_CHARS[t>>24&15]+HEX_CHARS[e>>4&15]+HEX_CHARS[15&e]+HEX_CHARS[e>>12&15]+HEX_CHARS[e>>8&15]+HEX_CHARS[e>>20&15]+HEX_CHARS[e>>16&15]+HEX_CHARS[e>>28&15]+HEX_CHARS[e>>24&15]+HEX_CHARS[a>>4&15]+HEX_CHARS[15&a]+HEX_CHARS[a>>12&15]+HEX_CHARS[a>>8&15]+HEX_CHARS[a>>20&15]+HEX_CHARS[a>>16&15]+HEX_CHARS[a>>28&15]+HEX_CHARS[a>>24&15]+HEX_CHARS[u>>4&15]+HEX_CHARS[15&u]+HEX_CHARS[u>>12&15]+HEX_CHARS[u>>8&15]+HEX_CHARS[u>>20&15]+HEX_CHARS[u>>16&15]+HEX_CHARS[u>>28&15]+HEX_CHARS[u>>24&15]},Md5.prototype.toString=Md5.prototype.hex,Md5.prototype.digest=function(){this.finalize();var t=this.h0,e=this.h1,a=this.h2,u=this.h3;return[255&t,t>>8&255,t>>16&255,t>>24&255,255&e,e>>8&255,e>>16&255,e>>24&255,255&a,a>>8&255,a>>16&255,a>>24&255,255&u,u>>8&255,u>>16&255,u>>24&255]},Md5.prototype.array=Md5.prototype.digest,Md5.prototype.arrayBuffer=function(){this.finalize();var t=new ArrayBuffer(16),e=new Uint32Array(t);return e[0]=this.h0,e[1]=this.h1,e[2]=this.h2,e[3]=this.h3,t},Md5.prototype.buffer=Md5.prototype.arrayBuffer,Md5.prototype.base64=function(){for(var t,e,a,u="",n=this.array(),l=0;l<15;)t=n[l++],e=n[l++],a=n[l++],u+=BASE64_ENCODE_CHAR[t>>>2]+BASE64_ENCODE_CHAR[63&(t<<4|e>>>4)]+BASE64_ENCODE_CHAR[63&(e<<2|a>>>6)]+BASE64_ENCODE_CHAR[63&a];return t=n[l],u+=BASE64_ENCODE_CHAR[t>>>2]+BASE64_ENCODE_CHAR[t<<4&63]+"==",u};var exports=createMethod();COMMON_JS?module.exports=exports:(root.md5=exports,AMD&&(__WEBPACK_AMD_DEFINE_RESULT__=function(){return exports}.call(exports,__webpack_require__,exports,module),void 0===__WEBPACK_AMD_DEFINE_RESULT__||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)))})()}).call(this,__webpack_require__("4362"),__webpack_require__("c8ba"))},c8ba:function(t,e){var a;a=function(){return this}();try{a=a||new Function("return this")()}catch(u){"object"===typeof window&&(a=window)}t.exports=a},ce8c:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u={ajaxUrl:{baseUrl:"http://api.fzhe.net/",appid:"fz0000001",appkey:"G7jAPhJm6X",urlList:{getIndex:"index/index",guessLike:"index/like",home:"",login:"user/account_login",add:"user/register",signIn:"sign/index",getSecurity:"sms/send",contrastSecurity:"sms/check_sms",getUser:"user/get_user",backPwd:"user/find_upass",allSite:"address/all",alterSite:"address/create",deleteSite:"address/delete",singleSite:"address/get",alterUserPwd:"user/modfiy_upass",alterPayPwd:"user/modfiy_pay_pass",alterUser:"user/profile",bindingBankCard:"user/bind_bank",bindingWX:"user/bind_wxpay",bindingZFB:"user/bind_alipay",antonymCertification:"user/shiming",getBill:"bill/page_all",billInfo:"bill/detail",getTransfer:"transfer/page_all",transferInfo:"transfer/detail",initiateTransfer:"transfer/create",getWithdrawal:"tixian/page_all",withdrawalInfo:"tixian/detail",initiateWithdrawal:"tixian/create",getClassificationLv1:"product_sort/all",getClassificationLv2:"product_sort/sub_item",getAnswer:"product_ask/lists",detailedAnswer:"product_ask/ask",goodsAnswerDetails:"product_ask/detail",userQuestions:"product_ask/add_ask",userAnswer:"product_ask/add_answer",usefulAnswer:"product_ask/useful",merchantsInfo:"seller/get",merchantsIndexTan:"seller/tabs",merchantsGoods:"seller/get_product",merchantsDynamic:"seller/get_article",merchantActivityDynamic:"seller/get_activity",merchantMJX:"seller/get_show",getNewsType:"news/sort_all",getNewsList:"news/page_all",getNewsInfo:"news/detail",getTypeAdvertising:"news/get_banner",afficheList:"notice/page_all",afficheInfo:"notice/detail",appIndexShuffling:"banner/app_index_lunbo",appMallShuffling:"banner/shops_lunbo",getSinglePage:"single_page/all",singlePageIndo:"single_page/detail",goodsInfo:"product/detail",goodsDescribe:"product/detail_desc",goodsComments:"product/detail_comment",getUserAllTeam:"user/alltuandui",getUserThreeTeam:"user/tuandui",addCollect:"collect/create",getCollect:"collect/page_all",getBrowseRecord:"histor/page_all",addCart:"cart/add",getCart:"cart/getcart",setAmount:"cart/update_quantity",checkall:"cart/select_all",deleteCart:"/cart/delete",getMarchRase:"crowdfunding/valid_all",getOverRase:"crowdfunding/over_all",getSupportRase:"crowdfunding/support",raseListInfo:"crowdfunding/detail",createRaseOrder:"crowdfunding/create_order",getRaseOrder:"user_order/crowdfunding",raseOrderInfo:"user_order/crowdfunding",raseOrderYes:"user_order/crowdfunding_receipt",logisticsTrace:"user_order/wuliu",getFzCollegialClass:"fzdaxue/sort_all",getFZCollegialList:"fzdaxue/page_all",getFZCollegialInfo:"fzdaxue/detail",getOrderList:"user_order/baodan",getOrderInfo:"user_order/baodan_detail",confirmGoods:"user_order/baodan_receipt",logistics:"user_order/wuliu",getClassList:"baodan/sort_all",getGoodsList:"baodan/page_all"}}};e.default=u},df7c:function(t,e,a){(function(t){function a(t,e){for(var a=0,u=t.length-1;u>=0;u--){var n=t[u];"."===n?t.splice(u,1):".."===n?(t.splice(u,1),a++):a&&(t.splice(u,1),a--)}if(e)for(;a--;a)t.unshift("..");return t}var u=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,n=function(t){return u.exec(t).slice(1)};function l(t,e){if(t.filter)return t.filter(e);for(var a=[],u=0;u<t.length;u++)e(t[u],u,t)&&a.push(t[u]);return a}e.resolve=function(){for(var e="",u=!1,n=arguments.length-1;n>=-1&&!u;n--){var r=n>=0?arguments[n]:t.cwd();if("string"!==typeof r)throw new TypeError("Arguments to path.resolve must be strings");r&&(e=r+"/"+e,u="/"===r.charAt(0))}return e=a(l(e.split("/"),function(t){return!!t}),!u).join("/"),(u?"/":"")+e||"."},e.normalize=function(t){var u=e.isAbsolute(t),n="/"===r(t,-1);return t=a(l(t.split("/"),function(t){return!!t}),!u).join("/"),t||u||(t="."),t&&n&&(t+="/"),(u?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(l(t,function(t,e){if("string"!==typeof t)throw new TypeError("Arguments to path.join must be strings");return t}).join("/"))},e.relative=function(t,a){function u(t){for(var e=0;e<t.length;e++)if(""!==t[e])break;for(var a=t.length-1;a>=0;a--)if(""!==t[a])break;return e>a?[]:t.slice(e,a-e+1)}t=e.resolve(t).substr(1),a=e.resolve(a).substr(1);for(var n=u(t.split("/")),l=u(a.split("/")),r=Math.min(n.length,l.length),v=r,i=0;i<r;i++)if(n[i]!==l[i]){v=i;break}var o=[];for(i=v;i<n.length;i++)o.push("..");return o=o.concat(l.slice(v)),o.join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){var e=n(t),a=e[0],u=e[1];return a||u?(u&&(u=u.substr(0,u.length-1)),a+u):"."},e.basename=function(t,e){var a=n(t)[2];return e&&a.substr(-1*e.length)===e&&(a=a.substr(0,a.length-e.length)),a},e.extname=function(t){return n(t)[3]};var r="b"==="ab".substr(-1)?function(t,e,a){return t.substr(e,a)}:function(t,e,a){return e<0&&(e=t.length+e),t.substr(e,a)}}).call(this,a("4362"))},e953:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=l(a("a34a")),n=l(a("c663"));function l(t){return t&&t.__esModule?t:{default:t}}function r(t,e,a,u,n,l,r){try{var v=t[l](r),i=v.value}catch(o){return void a(o)}v.done?e(i):Promise.resolve(i).then(u,n)}function v(t){return function(){var e=this,a=arguments;return new Promise(function(u,n){var l=t.apply(e,a);function v(t){r(l,u,n,v,i,"next",t)}function i(t){r(l,u,n,v,i,"throw",t)}v(void 0)})}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var a=0;a<e.length;a++){var u=e[a];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(t,u.key,u)}}function x(t,e,a){return e&&o(t.prototype,e),a&&o(t,a),t}function c(t,e){return!e||"object"!==typeof e&&"function"!==typeof e?s(t):e}function s(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function f(t){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},f(t)}function p(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}function h(t,e){return h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},h(t,e)}var d=function(t){function e(){return i(this,e),c(this,f(e).apply(this,arguments))}return p(e,t),x(e,[{key:"afficheList",value:function(){var t=v(u.default.mark(function t(e){return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.api.get({url:this.config.ajaxUrl.urlList.afficheList,data:e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()},{key:"afficheInfo",value:function(){var t=v(u.default.mark(function t(e){return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.api.get({url:this.config.ajaxUrl.urlList.afficheInfo,data:e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()},{key:"appIndexShuffling",value:function(){var t=v(u.default.mark(function t(e){return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.api.get({url:this.config.ajaxUrl.urlList.appIndexShuffling,data:e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()},{key:"appMallShuffling",value:function(){var t=v(u.default.mark(function t(e){return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.api.get({url:this.config.ajaxUrl.urlList.appMallShuffling,data:e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()},{key:"getSinglePage",value:function(){var t=v(u.default.mark(function t(e){return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.api.get({url:this.config.ajaxUrl.urlList.getSinglePage,data:e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()},{key:"singlePageIndo",value:function(){var t=v(u.default.mark(function t(e){return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.api.get({url:this.config.ajaxUrl.urlList.singlePageIndo,data:e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()}]),e}(n.default);e.default=d},fb26:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=l(a("a34a")),n=l(a("4f45"));function l(t){return t&&t.__esModule?t:{default:t}}function r(t,e,a,u,n,l,r){try{var v=t[l](r),i=v.value}catch(o){return void a(o)}v.done?e(i):Promise.resolve(i).then(u,n)}function v(t){return function(){var e=this,a=arguments;return new Promise(function(u,n){var l=t.apply(e,a);function v(t){r(l,u,n,v,i,"next",t)}function i(t){r(l,u,n,v,i,"throw",t)}v(void 0)})}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var a=0;a<e.length;a++){var u=e[a];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(t,u.key,u)}}function x(t,e,a){return e&&o(t.prototype,e),a&&o(t,a),t}var c=function(){function t(){i(this,t),this.sec=new n.default}return x(t,[{key:"getSecurity",value:function(){var t=v(u.default.mark(function t(e){var a;return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.sec.getSecurity(e);case 2:if(a=t.sent,0!=a.code){t.next=5;break}return t.abrupt("return",a);case 5:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()},{key:"contrastSecurity",value:function(){var t=v(u.default.mark(function t(e){var a;return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.sec.contrastSecurity(e);case 2:if(a=t.sent,0!=a.code){t.next=5;break}return t.abrupt("return",a);case 5:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()}]),t}(),s=new c;e.default=s},fc57:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=l(a("a34a")),n=l(a("c663"));function l(t){return t&&t.__esModule?t:{default:t}}function r(t,e,a,u,n,l,r){try{var v=t[l](r),i=v.value}catch(o){return void a(o)}v.done?e(i):Promise.resolve(i).then(u,n)}function v(t){return function(){var e=this,a=arguments;return new Promise(function(u,n){var l=t.apply(e,a);function v(t){r(l,u,n,v,i,"next",t)}function i(t){r(l,u,n,v,i,"throw",t)}v(void 0)})}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var a=0;a<e.length;a++){var u=e[a];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(t,u.key,u)}}function x(t,e,a){return e&&o(t.prototype,e),a&&o(t,a),t}function c(t,e){return!e||"object"!==typeof e&&"function"!==typeof e?s(t):e}function s(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function f(t){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},f(t)}function p(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}function h(t,e){return h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},h(t,e)}var d=function(t){function e(){return i(this,e),c(this,f(e).apply(this,arguments))}return p(e,t),x(e,[{key:"goodsInfo",value:function(){var t=v(u.default.mark(function t(e){return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.api.get({url:this.config.ajaxUrl.urlList.goodsInfo,data:e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()},{key:"goodsDescribe",value:function(){var t=v(u.default.mark(function t(e){return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.api.get({url:this.config.ajaxUrl.urlList.goodsDescribe,data:e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()},{key:"goodsComments",value:function(){var t=v(u.default.mark(function t(e){return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.api.get({url:this.config.ajaxUrl.urlList.goodsComments,data:e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()}]),e}(n.default);e.default=d}}]);
});

define('app.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

require('./common/runtime.js')
require('./common/vendor.js')
require('./common/main.js')
});
require('app.js');

__wxRoute = 'components/navBar/uni-icons/uni-icons';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/navBar/uni-icons/uni-icons.js';

define('components/navBar/uni-icons/uni-icons.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/navBar/uni-icons/uni-icons"], {
  "1f30": function f30(n, t, e) {},
  "1fd5": function fd5(n, t, e) {
    "use strict";

    e.r(t);
    var u = e("edd8"),
        r = e.n(u);

    for (var f in u) {
      "default" !== f && function (n) {
        e.d(t, n, function () {
          return u[n];
        });
      }(f);
    }

    t["default"] = r.a;
  },
  "3fe7": function fe7(n, t, e) {
    "use strict";

    var u = e("1f30"),
        r = e.n(u);
    r.a;
  },
  b11b: function b11b(n, t, e) {
    "use strict";

    e.r(t);
    var u = e("f993"),
        r = e("1fd5");

    for (var f in r) {
      "default" !== f && function (n) {
        e.d(t, n, function () {
          return r[n];
        });
      }(f);
    }

    e("3fe7");
    var i = e("2877"),
        a = Object(i["a"])(r["default"], u["a"], u["b"], !1, null, "347b4280", null);
    t["default"] = a.exports;
  },
  edd8: function edd8(n, t, e) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var u = r(e("a77b"));

    function r(n) {
      return n && n.__esModule ? n : {
        default: n
      };
    }

    var f = {
      name: "UniIcons",
      props: {
        type: {
          type: String,
          default: ""
        },
        color: {
          type: String,
          default: "#333333"
        },
        size: {
          type: [Number, String],
          default: 16
        }
      },
      data: function data() {
        return {
          icons: u.default
        };
      },
      methods: {
        _onClick: function _onClick() {
          this.$emit("click");
        }
      }
    };
    t.default = f;
  },
  f993: function f993(n, t, e) {
    "use strict";

    var u = function u() {
      var n = this,
          t = n.$createElement;
      n._self._c;
    },
        r = [];

    e.d(t, "a", function () {
      return u;
    }), e.d(t, "b", function () {
      return r;
    });
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/navBar/uni-icons/uni-icons-create-component', {
  'components/navBar/uni-icons/uni-icons-create-component': function componentsNavBarUniIconsUniIconsCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("b11b"));
  }
}, [['components/navBar/uni-icons/uni-icons-create-component']]]);
});
require('components/navBar/uni-icons/uni-icons.js');
__wxRoute = 'components/navBar/uni-nav-bar/uni-nav-bar';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/navBar/uni-nav-bar/uni-nav-bar.js';

define('components/navBar/uni-nav-bar/uni-nav-bar.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/navBar/uni-nav-bar/uni-nav-bar"], {
  "0001": function _(t, n, e) {
    "use strict";

    e.r(n);
    var i = e("5b80"),
        a = e("6248");

    for (var u in a) {
      "default" !== u && function (t) {
        e.d(n, t, function () {
          return a[t];
        });
      }(u);
    }

    e("922b");
    var r = e("2877"),
        o = Object(r["a"])(a["default"], i["a"], i["b"], !1, null, "290d0e7c", null);
    n["default"] = o.exports;
  },
  "0096": function _(t, n, e) {
    "use strict";

    (function (t) {
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;

      var i = function i() {
        return e.e("components/navBar/uni-status-bar/uni-status-bar").then(e.bind(null, "1a67"));
      },
          a = function a() {
        return Promise.all([e.e("common/vendor"), e.e("components/navBar/uni-icons/uni-icons")]).then(e.bind(null, "b11b"));
      },
          u = {
        name: "UniNavBar",
        components: {
          uniStatusBar: i,
          uniIcons: a
        },
        props: {
          title: {
            type: String,
            default: ""
          },
          leftText: {
            type: String,
            default: ""
          },
          rightText: {
            type: String,
            default: ""
          },
          leftIcon: {
            type: String,
            default: ""
          },
          rightIcon: {
            type: String,
            default: ""
          },
          fixed: {
            type: [Boolean, String],
            default: !1
          },
          color: {
            type: String,
            default: "#000000"
          },
          backgroundColor: {
            type: String,
            default: "#FFFFFF"
          },
          statusBar: {
            type: [Boolean, String],
            default: !1
          },
          shadow: {
            type: [String, Boolean],
            default: !1
          },
          border: {
            type: [String, Boolean],
            default: !0
          }
        },
        mounted: function mounted() {
          t.report && "" !== this.title && t.report("title", this.title);
        },
        methods: {
          onClickLeft: function onClickLeft() {
            this.$emit("clickLeft");
          },
          onClickRight: function onClickRight() {
            this.$emit("clickRight");
          }
        }
      };

      n.default = u;
    }).call(this, e("6e42")["default"]);
  },
  "5b80": function b80(t, n, e) {
    "use strict";

    var i = function i() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        a = [];

    e.d(n, "a", function () {
      return i;
    }), e.d(n, "b", function () {
      return a;
    });
  },
  6248: function _(t, n, e) {
    "use strict";

    e.r(n);
    var i = e("0096"),
        a = e.n(i);

    for (var u in i) {
      "default" !== u && function (t) {
        e.d(n, t, function () {
          return i[t];
        });
      }(u);
    }

    n["default"] = a.a;
  },
  "922b": function b(t, n, e) {
    "use strict";

    var i = e("c4ea"),
        a = e.n(i);
    a.a;
  },
  c4ea: function c4ea(t, n, e) {}
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/navBar/uni-nav-bar/uni-nav-bar-create-component', {
  'components/navBar/uni-nav-bar/uni-nav-bar-create-component': function componentsNavBarUniNavBarUniNavBarCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("0001"));
  }
}, [['components/navBar/uni-nav-bar/uni-nav-bar-create-component']]]);
});
require('components/navBar/uni-nav-bar/uni-nav-bar.js');
__wxRoute = 'components/navBar/uni-status-bar/uni-status-bar';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/navBar/uni-status-bar/uni-status-bar.js';

define('components/navBar/uni-status-bar/uni-status-bar.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/navBar/uni-status-bar/uni-status-bar"], {
  "13eb": function eb(t, n, a) {
    "use strict";

    var e = function e() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        u = [];

    a.d(n, "a", function () {
      return e;
    }), a.d(n, "b", function () {
      return u;
    });
  },
  "1a67": function a67(t, n, a) {
    "use strict";

    a.r(n);
    var e = a("13eb"),
        u = a("2dc4");

    for (var r in u) {
      "default" !== r && function (t) {
        a.d(n, t, function () {
          return u[t];
        });
      }(r);
    }

    a("d67f");
    var f = a("2877"),
        c = Object(f["a"])(u["default"], e["a"], e["b"], !1, null, "22a4db66", null);
    n["default"] = c.exports;
  },
  2260: function _(t, n, a) {},
  "2dc4": function dc4(t, n, a) {
    "use strict";

    a.r(n);
    var e = a("e39f"),
        u = a.n(e);

    for (var r in e) {
      "default" !== r && function (t) {
        a.d(n, t, function () {
          return e[t];
        });
      }(r);
    }

    n["default"] = u.a;
  },
  d67f: function d67f(t, n, a) {
    "use strict";

    var e = a("2260"),
        u = a.n(e);
    u.a;
  },
  e39f: function e39f(t, n, a) {
    "use strict";

    (function (t) {
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;
      var a = t.getSystemInfoSync().statusBarHeight + "px",
          e = {
        name: "UniStatusBar",
        data: function data() {
          return {
            statusBarHeight: a
          };
        }
      };
      n.default = e;
    }).call(this, a("6e42")["default"]);
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/navBar/uni-status-bar/uni-status-bar-create-component', {
  'components/navBar/uni-status-bar/uni-status-bar-create-component': function componentsNavBarUniStatusBarUniStatusBarCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("1a67"));
  }
}, [['components/navBar/uni-status-bar/uni-status-bar-create-component']]]);
});
require('components/navBar/uni-status-bar/uni-status-bar.js');
__wxRoute = 'components/uitls/shippingSite';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uitls/shippingSite.js';

define('components/uitls/shippingSite.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uitls/shippingSite"], {
  "0f7e": function f7e(t, e, i) {
    "use strict";

    var n = i("9edd"),
        s = i.n(n);
    s.a;
  },
  2781: function _(t, e, i) {
    "use strict";

    (function (t, n) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var s = o(i("a34a")),
          r = o(i("6aec"));

      function o(t) {
        return t && t.__esModule ? t : {
          default: t
        };
      }

      function c(t, e) {
        if (null == t) return {};
        var i,
            n,
            s = u(t, e);

        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);

          for (n = 0; n < r.length; n++) {
            i = r[n], e.indexOf(i) >= 0 || Object.prototype.propertyIsEnumerable.call(t, i) && (s[i] = t[i]);
          }
        }

        return s;
      }

      function u(t, e) {
        if (null == t) return {};
        var i,
            n,
            s = {},
            r = Object.keys(t);

        for (n = 0; n < r.length; n++) {
          i = r[n], e.indexOf(i) >= 0 || (s[i] = t[i]);
        }

        return s;
      }

      function a(t, e, i, n, s, r, o) {
        try {
          var c = t[r](o),
              u = c.value;
        } catch (a) {
          return void i(a);
        }

        c.done ? e(u) : Promise.resolve(u).then(n, s);
      }

      function l(t) {
        return function () {
          var e = this,
              i = arguments;
          return new Promise(function (n, s) {
            var r = t.apply(e, i);

            function o(t) {
              a(r, n, s, o, c, "next", t);
            }

            function c(t) {
              a(r, n, s, o, c, "throw", t);
            }

            o(void 0);
          });
        };
      }

      var f = {
        name: "shippingSite",
        props: {},
        data: function data() {
          return {
            userInfo: {
              token: "",
              uid: ""
            },
            siteInfo: {
              id: "",
              consignee: "",
              province: "",
              city: "",
              district: "",
              address: "",
              mobile: "",
              is_default: 2
            },
            siteList: {},
            pickerText: "选择地址",
            provinceList: [],
            cityList: [],
            areaList: [],
            index: 0,
            subscript: 0,
            defaults: !1
          };
        },
        created: function created() {
          this.userInfo.token = t.getStorageSync("token"), this.userInfo.uid = t.getStorageSync("uid"), this.getProvince();
        },
        methods: {
          allSite: function () {
            var t = l(s.default.mark(function t() {
              var e;
              return s.default.wrap(function (t) {
                while (1) {
                  switch (t.prev = t.next) {
                    case 0:
                      return t.next = 2, this.$http.siteService.allSite(this.userInfo);

                    case 2:
                      e = t.sent, void 0 != e && e.hasOwnProperty("code") && (this.siteList = e.data);

                    case 4:
                    case "end":
                      return t.stop();
                  }
                }
              }, t, this);
            }));

            function e() {
              return t.apply(this, arguments);
            }

            return e;
          }(),
          alterSite: function () {
            var t = l(s.default.mark(function t() {
              var e,
                  i,
                  r,
                  o = arguments;
              return s.default.wrap(function (t) {
                while (1) {
                  switch (t.prev = t.next) {
                    case 0:
                      if (e = o.length > 0 && void 0 !== o[0] ? o[0] : -1, console.log(n(e, " at components\\uitls\\shippingSite.vue:108")), -1 == e) {
                        t.next = 9;
                        break;
                      }

                      return this.siteInfo.id = this.siteList[e].id, t.next = 6, this.$http.siteService.alterSite(this.siteInfo);

                    case 6:
                      t.sent, t.next = 13;
                      break;

                    case 9:
                      return i = this.siteInfo, i.id, r = c(i, ["id"]), t.next = 12, this.$http.siteService.alterSite(r);

                    case 12:
                      t.sent;

                    case 13:
                    case "end":
                      return t.stop();
                  }
                }
              }, t, this);
            }));

            function e() {
              return t.apply(this, arguments);
            }

            return e;
          }(),
          deleteSite: function () {
            var t = l(s.default.mark(function t(e) {
              var i, r;
              return s.default.wrap(function (t) {
                while (1) {
                  switch (t.prev = t.next) {
                    case 0:
                      return i = {
                        id: this.siteList[e].id
                      }, t.next = 3, this.$http.siteService.deleteSite(i);

                    case 3:
                      r = t.sent, 0 == r.code && console.log(n(this.siteList, " at components\\uitls\\shippingSite.vue:125")), console.log(n(r, " at components\\uitls\\shippingSite.vue:127"));

                    case 6:
                    case "end":
                      return t.stop();
                  }
                }
              }, t, this);
            }));

            function e(e) {
              return t.apply(this, arguments);
            }

            return e;
          }(),
          singleSite: function () {
            var t = l(s.default.mark(function t(e) {
              var i, r;
              return s.default.wrap(function (t) {
                while (1) {
                  switch (t.prev = t.next) {
                    case 0:
                      return i = {
                        id: this.siteList[e].id
                      }, t.next = 3, this.$http.siteService.singleSite(i);

                    case 3:
                      r = t.sent, console.log(n(r, " at components\\uitls\\shippingSite.vue:135"));

                    case 5:
                    case "end":
                      return t.stop();
                  }
                }
              }, t, this);
            }));

            function e(e) {
              return t.apply(this, arguments);
            }

            return e;
          }(),
          getProvince: function getProvince() {
            this.provinceList = r.default.a, this.getCity();
          },
          getCity: function getCity() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
            this.index = t, this.cityList = this.provinceList[t].children, this.siteInfo.province = this.provinceList[t].value, this.areaList = [], this.getArea();
          },
          getArea: function getArea() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
            this.subscript = t, this.siteInfo.city = this.provinceList[this.index].children[t].value, this.areaList = this.provinceList[this.index].children[t].children, this.setdistrict();
          },
          setdistrict: function setdistrict() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
            this.siteInfo.district = this.provinceList[this.index].children[this.subscript].children[t].value, console.log(n(this.siteInfo, " at components\\uitls\\shippingSite.vue:169"));
          },
          switchChange: function switchChange(t) {
            this.defaults = t.detail.value, console.log(n(this.defaults, " at components\\uitls\\shippingSite.vue:176"));
          }
        },
        components: {}
      };
      e.default = f;
    }).call(this, i("6e42")["default"], i("0de9")["default"]);
  },
  "9edd": function edd(t, e, i) {},
  ca8b: function ca8b(t, e, i) {
    "use strict";

    i.r(e);
    var n = i("2781"),
        s = i.n(n);

    for (var r in n) {
      "default" !== r && function (t) {
        i.d(e, t, function () {
          return n[t];
        });
      }(r);
    }

    e["default"] = s.a;
  },
  e350: function e350(t, e, i) {
    "use strict";

    i.r(e);
    var n = i("eeaf"),
        s = i("ca8b");

    for (var r in s) {
      "default" !== r && function (t) {
        i.d(e, t, function () {
          return s[t];
        });
      }(r);
    }

    i("0f7e");
    var o = i("2877"),
        c = Object(o["a"])(s["default"], n["a"], n["b"], !1, null, "3090012f", null);
    e["default"] = c.exports;
  },
  eeaf: function eeaf(t, e, i) {
    "use strict";

    var n = function n() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        s = [];

    i.d(e, "a", function () {
      return n;
    }), i.d(e, "b", function () {
      return s;
    });
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uitls/shippingSite-create-component', {
  'components/uitls/shippingSite-create-component': function componentsUitlsShippingSiteCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("e350"));
  }
}, [['components/uitls/shippingSite-create-component']]]);
});
require('components/uitls/shippingSite.js');
__wxRoute = 'components/uni-swiper-dot/uni-swiper-dot';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-swiper-dot/uni-swiper-dot.js';

define('components/uni-swiper-dot/uni-swiper-dot.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-swiper-dot/uni-swiper-dot"], {
  "2a4a": function a4a(t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var o = {
      name: "UniSwiperDot",
      props: {
        info: {
          type: Array,
          default: function _default() {
            return [];
          }
        },
        current: {
          type: Number,
          default: 0
        },
        dotsStyles: {
          type: Object,
          default: function _default() {
            return {};
          }
        },
        mode: {
          type: String,
          default: "default"
        },
        field: {
          type: String,
          default: ""
        }
      },
      data: function data() {
        return {
          dots: {
            width: 8,
            height: 8,
            bottom: 10,
            color: "#fff",
            backgroundColor: "rgba(0, 0, 0, .3)",
            border: "1px rgba(0, 0, 0, .3) solid",
            selectedBackgroundColor: "#333",
            selectedBorder: "1px rgba(0, 0, 0, .9) solid"
          }
        };
      },
      watch: {
        dotsStyles: function dotsStyles(t) {
          this.dots = Object.assign(this.dots, this.dotsStyles);
        },
        mode: function mode(t) {
          "indexes" === t ? (this.dots.width = 20, this.dots.height = 20) : (this.dots.width = 8, this.dots.height = 8);
        }
      },
      created: function created() {
        "indexes" === this.mode && (this.dots.width = 20, this.dots.height = 20), this.dots = Object.assign(this.dots, this.dotsStyles);
      }
    };
    e.default = o;
  },
  3007: function _(t, e, n) {},
  "47df": function df(t, e, n) {
    "use strict";

    var o = n("3007"),
        i = n.n(o);
    i.a;
  },
  "851e": function e(t, _e, n) {
    "use strict";

    n.r(_e);
    var o = n("2a4a"),
        i = n.n(o);

    for (var s in o) {
      "default" !== s && function (t) {
        n.d(_e, t, function () {
          return o[t];
        });
      }(s);
    }

    _e["default"] = i.a;
  },
  ae4a: function ae4a(t, e, n) {
    "use strict";

    var o = function o() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        i = [];

    n.d(e, "a", function () {
      return o;
    }), n.d(e, "b", function () {
      return i;
    });
  },
  f9ae: function f9ae(t, e, n) {
    "use strict";

    n.r(e);
    var o = n("ae4a"),
        i = n("851e");

    for (var s in i) {
      "default" !== s && function (t) {
        n.d(e, t, function () {
          return i[t];
        });
      }(s);
    }

    n("47df");
    var r = n("2877"),
        d = Object(r["a"])(i["default"], o["a"], o["b"], !1, null, "219ea54e", null);
    e["default"] = d.exports;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-swiper-dot/uni-swiper-dot-create-component', {
  'components/uni-swiper-dot/uni-swiper-dot-create-component': function componentsUniSwiperDotUniSwiperDotCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("f9ae"));
  }
}, [['components/uni-swiper-dot/uni-swiper-dot-create-component']]]);
});
require('components/uni-swiper-dot/uni-swiper-dot.js');

__wxRoute = 'pages/index/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/index.js';

define('pages/index/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{2665:function(e,t,n){},"511f":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("a34a"));function i(e){return e&&e.__esModule?e:{default:e}}function r(e,t,n,a,i,r,u){try{var o=e[r](u),c=o.value}catch(s){return void n(s)}o.done?t(c):Promise.resolve(c).then(a,i)}function u(e){return function(){var t=this,n=arguments;return new Promise(function(a,i){var u=e.apply(t,n);function o(e){r(u,a,i,o,c,"next",e)}function c(e){r(u,a,i,o,c,"throw",e)}o(void 0)})}}var o={components:{},data:function(){return{indexData:{banner:{nav_bom_ad:[{pic:""}],nav_bom_bom_ad:[{pic:""},{pic:""},{pic:""}]}},likeList:[]}},onLoad:function(){},created:function(){this.getIndex(),this.guessLike()},methods:{getIndex:function(){var t=u(a.default.mark(function t(){var n,i,r;return a.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.indexService.getIndex();case 2:if(n=t.sent,0==n.code&&n.hasOwnProperty("code")){for(i=[],r=0;r<10;r++)i.push(n.data.nav_list[r]);n.data.nav_list=i,this.indexData=n.data}console.log(e(this.indexData," at pages\\index\\index.vue:389"));case 5:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}(),guessLike:function(){var t=u(a.default.mark(function t(n){var i;return a.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.indexService.guessLike({page:n});case 2:i=t.sent,0==i.code&&i.hasOwnProperty("code")&&(this.likeList=i.data.data),console.log(e(this.likeList," at pages\\index\\index.vue:397"));case 5:case"end":return t.stop()}},t,this)}));function n(e){return t.apply(this,arguments)}return n}()}};t.default=o}).call(this,n("0de9")["default"])},5729:function(e,t,n){"use strict";(function(e){n("8de5"),n("921b");a(n("66fd"));var t=a(n("beea"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"7e0e":function(e,t,n){"use strict";var a=n("2665"),i=n.n(a);i.a},"7e6a":function(e,t,n){"use strict";n.r(t);var a=n("511f"),i=n.n(a);for(var r in a)"default"!==r&&function(e){n.d(t,e,function(){return a[e]})}(r);t["default"]=i.a},"992e":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c},i=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return i})},beea:function(e,t,n){"use strict";n.r(t);var a=n("992e"),i=n("7e6a");for(var r in i)"default"!==r&&function(e){n.d(t,e,function(){return i[e]})}(r);n("7e0e");var u=n("2877"),o=Object(u["a"])(i["default"],a["a"],a["b"],!1,null,"468c2e9f",null);t["default"]=o.exports}},[["5729","common/runtime","common/vendor"]]]);
});
require('pages/index/index.js');
__wxRoute = 'pages/classification/classification';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/classification/classification.js';

define('pages/classification/classification.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/classification/classification"],{"14a3":function(t,n,e){"use strict";e.r(n);var i=e("3c70"),a=e("492e");for(var s in a)"default"!==s&&function(t){e.d(n,t,function(){return a[t]})}(s);e("50c0");var r=e("2877"),c=Object(r["a"])(a["default"],i["a"],i["b"],!1,null,"ed044f06",null);n["default"]=c.exports},"29d5":function(t,n,e){"use strict";(function(t,i){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=s(e("a34a"));function s(t){return t&&t.__esModule?t:{default:t}}function r(t,n,e,i,a,s,r){try{var c=t[s](r),o=c.value}catch(u){return void e(u)}c.done?n(o):Promise.resolve(o).then(i,a)}function c(t){return function(){var n=this,e=arguments;return new Promise(function(i,a){var s=t.apply(n,e);function c(t){r(s,i,a,c,o,"next",t)}function o(t){r(s,i,a,c,o,"throw",t)}c(void 0)})}}var o=function(){return e.e("components/uni-swiper-dot/uni-swiper-dot").then(e.bind(null,"f9ae"))},u=function(){return e.e("components/navBar/uni-nav-bar/uni-nav-bar").then(e.bind(null,"0001"))},l={components:{uniSwiperDot:o,uniNavBar:u},data:function(){return{parameter:{pid:"1"},ClassList:{lv1:[],lv2:[]},installList:{height:0,scrollTop:0,scrollHeight:0,categoryActive:0,current:0,className:0,jump:0}}},created:function(){this.getClassificationLv1()},methods:{getClassificationLv1:function(){var t=c(a.default.mark(function t(){var n;return a.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.classificationService.getClassificationLv1();case 2:n=t.sent,n.hasOwnProperty("code")&&0===n.code&&(this.ClassList.lv1=n.data.item,this.getClassificationLv2());case 4:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}(),getClassificationLv2:function(){var n=c(a.default.mark(function n(){var e,i,s=arguments;return a.default.wrap(function(n){while(1)switch(n.prev=n.next){case 0:return e=s.length>0&&void 0!==s[0]?s[0]:0,this.parameter.pid=this.ClassList.lv1[e].id,this.installList.className=e,n.next=5,this.$http.classificationService.getClassificationLv2(this.parameter);case 5:i=n.sent,this.ClassList.lv2=i.hasOwnProperty("code")&&0===i.code?i.data:[],console.log(t(this.ClassList.lv2," at pages\\classification\\classification.vue:102"));case 8:case"end":return n.stop()}},n,this)}));function e(){return n.apply(this,arguments)}return e}(),jumpInfo:function(){i.navigateTo({url:"./classInfo"})},scroll:function(t){this.scrollHeight=t.detail.scrollHeight},change:function(t){this.current=t.detail.current}},mounted:function(){var t=this;i.getSystemInfo({success:function(n){t.installList.height=n.screenHeight-50-50}})}};n.default=l}).call(this,e("0de9")["default"],e("6e42")["default"])},"3c70":function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return a})},"492e":function(t,n,e){"use strict";e.r(n);var i=e("29d5"),a=e.n(i);for(var s in i)"default"!==s&&function(t){e.d(n,t,function(){return i[t]})}(s);n["default"]=a.a},"50c0":function(t,n,e){"use strict";var i=e("a8a6"),a=e.n(i);a.a},a8a6:function(t,n,e){},c9b4:function(t,n,e){"use strict";(function(t){e("8de5"),e("921b");i(e("66fd"));var n=i(e("14a3"));function i(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])}},[["c9b4","common/runtime","common/vendor"]]]);
});
require('pages/classification/classification.js');
__wxRoute = 'pages/home/home';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/home/home.js';

define('pages/home/home.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/home/home"],{"1f24":function(e,n,t){"use strict";(function(e,o){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=u(t("a34a"));function u(e){return e&&e.__esModule?e:{default:e}}function i(e,n,t,o,r,u,i){try{var a=e[u](i),c=a.value}catch(f){return void t(f)}a.done?n(c):Promise.resolve(c).then(o,r)}function a(e){return function(){var n=this,t=arguments;return new Promise(function(o,r){var u=e.apply(n,t);function a(e){i(u,o,r,a,c,"next",e)}function c(e){i(u,o,r,a,c,"throw",e)}a(void 0)})}}var c=function(){return Promise.all([t.e("common/vendor"),t.e("components/uitls/shippingSite")]).then(t.bind(null,"e350"))},f={components:{shippingSite:c},data:function(){return{userInfo:{uid:"",token:""}}},onLoad:function(){this.getUserInformation()},methods:{getUserInformation:function(){var n=a(r.default.mark(function n(){var t;return r.default.wrap(function(n){while(1)switch(n.prev=n.next){case 0:return this.userInfo.uid=e.getStorageSync("uid"),this.userInfo.token=e.getStorageSync("token"),n.next=4,this.$http.userService.getUserInformation(this.userInfo);case 4:t=n.sent,console.log(o(t," at pages\\home\\home.vue:32"));case 6:case"end":return n.stop()}},n,this)}));function t(){return n.apply(this,arguments)}return t}()}};n.default=f}).call(this,t("6e42")["default"],t("0de9")["default"])},"2e6e":function(e,n,t){"use strict";t.r(n);var o=t("5e72"),r=t("38ce");for(var u in r)"default"!==u&&function(e){t.d(n,e,function(){return r[e]})}(u);var i=t("2877"),a=Object(i["a"])(r["default"],o["a"],o["b"],!1,null,"31ed1e01",null);n["default"]=a.exports},"38ce":function(e,n,t){"use strict";t.r(n);var o=t("1f24"),r=t.n(o);for(var u in o)"default"!==u&&function(e){t.d(n,e,function(){return o[e]})}(u);n["default"]=r.a},5781:function(e,n,t){"use strict";(function(e){t("8de5"),t("921b");o(t("66fd"));var n=o(t("2e6e"));function o(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("6e42")["createPage"])},"5e72":function(e,n,t){"use strict";var o=function(){var e=this,n=e.$createElement;e._self._c},r=[];t.d(n,"a",function(){return o}),t.d(n,"b",function(){return r})}},[["5781","common/runtime","common/vendor"]]]);
});
require('pages/home/home.js');
__wxRoute = 'pages/login/login';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/login/login.js';

define('pages/login/login.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{"0536":function(t,e,n){},"4a4f":function(t,e,n){"use strict";n.r(e);var i=n("4b86"),a=n("c6dd");for(var s in a)"default"!==s&&function(t){n.d(e,t,function(){return a[t]})}(s);n("aa4f");var u=n("2877"),r=Object(u["a"])(a["default"],i["a"],i["b"],!1,null,"2a7de5b2",null);e["default"]=r.exports},"4b86":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},6019:function(t,e,n){"use strict";(function(t){n("8de5"),n("921b");i(n("66fd"));var e=i(n("4a4f"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"8d70":function(t,e,n){"use strict";(function(t,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=u(n("a34a")),s=u(n("fb26"));function u(t){return t&&t.__esModule?t:{default:t}}function r(t,e,n,i,a,s,u){try{var r=t[s](u),o=r.value}catch(c){return void n(c)}r.done?e(o):Promise.resolve(o).then(i,a)}function o(t){return function(){var e=this,n=arguments;return new Promise(function(i,a){var s=t.apply(e,n);function u(t){r(s,i,a,u,o,"next",t)}function o(t){r(s,i,a,u,o,"throw",t)}u(void 0)})}}var c=function(){return n.e("components/navBar/uni-nav-bar/uni-nav-bar").then(n.bind(null,"0001"))},f={components:{uniNavBar:c},data:function(){return{userInfo:{uname:"18100000001",upass:"111111"},backList:{uname:"",upase:"",upass_confirm:"",yzm:""},install:{buttonInst:!0,pageInstOne:!0},item:60,yzmList:["","","","","",""],keyList:["1","2","3","4","5","6","7","8","9","","0","x"],keySum:0}},methods:{getUserLogin:function(){var e=o(a.default.mark(function e(){var n;return a.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(11==this.userInfo.uname.length&&0!=this.userInfo.upass.length){e.next=4;break}t.showModal({content:"账号和密码不能为空！！！",showCancel:!1}),e.next=8;break;case 4:return e.next=6,this.$http.userService.userLogin(this.userInfo);case 6:n=e.sent,0==n.code&&n.hasOwnProperty("code")?(t.setStorageSync("token",n.data.token),t.setStorageSync("uid",n.data.info.uid),t.navigateTo({url:"../index/index"})):console.log(i(n," at pages\\login\\login.vue:113"));case 8:case"end":return e.stop()}},e,this)}));function n(){return e.apply(this,arguments)}return n}(),backPassword:function(){var t=o(a.default.mark(function t(){var e,n;return a.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.backList.upase!==this.backList.upass_confirm){t.next=10;break}return t.next=3,this.$http.userService.contrastSecurity({mobile:this.backList.uname,yzm:this.backList.yzm});case 3:if(e=t.sent,0!=e.code){t.next=10;break}return t.next=7,this.$http.userService.backPassword(this.backList);case 7:n=t.sent,console.log(i("此处是",n," at pages\\login\\login.vue:129")),this.cut=!0;case 10:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),getSecurity:function(){var t=o(a.default.mark(function t(){var e;return a.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:e=s.default.getSecurity({mobile:this.backList.uname}),console.log(i(e," at pages\\login\\login.vue:141")),this.install.pageInstOne=!1;case 3:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),getInput:function(t){this.install.buttonInst=11!==t.detail.value.length,this.backList.uname=t.detail.value},getKey:function(e){var n=this;if(this.yzmList.length<=6&&""==this.yzmList[5]){if("x"!=e&&" "!=e&&this.keySum<=5&&(this.yzmList[this.keySum]=e,this.keySum++,6==this.keySum)){this.yzmList.forEach(function(t,e){n.backList.yzm+=t});var i=s.default.contrastSecurity({mobile:this.backList.uname,yzm:this.backList.yzm});0==i.code&&i.hasOwnProperty("code")&&t.navigateTo({url:"../index/index"})}"x"==e&&this.keySum>0&&(--this.keySum,this.yzmList[this.keySum]="")}}}};e.default=f}).call(this,n("6e42")["default"],n("0de9")["default"])},aa4f:function(t,e,n){"use strict";var i=n("0536"),a=n.n(i);a.a},c6dd:function(t,e,n){"use strict";n.r(e);var i=n("8d70"),a=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);e["default"]=a.a}},[["6019","common/runtime","common/vendor"]]]);
});
require('pages/login/login.js');
__wxRoute = 'pages/register/register';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/register/register.js';

define('pages/register/register.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/register/register"],{"0047":function(t,e,n){"use strict";(function(t){n("8de5"),n("921b");i(n("66fd"));var e=i(n("0213"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"0213":function(t,e,n){"use strict";n.r(e);var i=n("f36f"),r=n("4901");for(var s in r)"default"!==s&&function(t){n.d(e,t,function(){return r[t]})}(s);n("bb88");var u=n("2877"),a=Object(u["a"])(r["default"],i["a"],i["b"],!1,null,"6129d4de",null);e["default"]=a.exports},4901:function(t,e,n){"use strict";n.r(e);var i=n("b3ee"),r=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);e["default"]=r.a},"93d7":function(t,e,n){},b3ee:function(t,e,n){"use strict";(function(t,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=s(n("a34a"));function s(t){return t&&t.__esModule?t:{default:t}}function u(t,e,n,i,r,s,u){try{var a=t[s](u),o=a.value}catch(c){return void n(c)}a.done?e(o):Promise.resolve(o).then(i,r)}function a(t){return function(){var e=this,n=arguments;return new Promise(function(i,r){var s=t.apply(e,n);function a(t){u(s,i,r,a,o,"next",t)}function o(t){u(s,i,r,a,o,"throw",t)}a(void 0)})}}var o=function(){return n.e("components/navBar/uni-nav-bar/uni-nav-bar").then(n.bind(null,"0001"))},c={components:{uniNavBar:o},data:function(){return{userInfo:{uname:"",upass:"",invite_code:8899,pay_pass:null},mobile:"15212907874",yzm:"",installList:{primeInstall:!0,seconInstall:!0,mite:"60s"}}},methods:{getSecurity:function(){var t=a(r.default.mark(function t(){var e,n;return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(11!=this.mobile.length||""==this.mobile){t.next=6;break}return e={mobile:this.mobile,mark_type:2},t.next=4,this.$http.userService.getSecurity(e);case 4:n=t.sent,0==n.code&&n.hasOwnProperty("code")&&(this.installList.primeInstall=!1,this.installList.mite="60s",this.getCode());case 6:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),contrastSecurity:function(){var e=a(r.default.mark(function e(){var n,i;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n={mobile:this.mobile,yzm:this.yzm},console.log(t(n," at pages\\register\\register.vue:134")),e.next=4,this.$http.userService.contrastSecurity(n);case 4:i=e.sent,0==i.code&&i.hasOwnProperty("code")&&this.setUser();case 6:case"end":return e.stop()}},e,this)}));function n(){return e.apply(this,arguments)}return n}(),setUser:function(){var t=a(r.default.mark(function t(){var e;return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.userInfo.uname=this.mobile,this.userInfo.upass=this.yzm,t.next=4,this.$http.userService.userRegist(this.userInfo);case 4:e=t.sent,0==e.code&&e.hasOwnProperty("code")&&(this.installList.seconInstall=!1);case 6:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),jumpLogin:function(){i.navigateTo({url:"../login/login"})},goBack:function(){this.installList.primeInstall=!0,this.installList.seconInstall=!0},getInput:function(t){this.mobile=11===t.detail.value.length?t.detail.value:""},getYzm:function(t){this.yzm=detail.value},getCode:function(){var t=this,e=60,n=setInterval(function(){--e,t.installList.mite=0==e?"重新发送":"".concat(e,"s")},1e3);setTimeout(function(){clearInterval(n)},6e4)}}};e.default=c}).call(this,n("0de9")["default"],n("6e42")["default"])},bb88:function(t,e,n){"use strict";var i=n("93d7"),r=n.n(i);r.a},f36f:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},r=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return r})}},[["0047","common/runtime","common/vendor"]]]);
});
require('pages/register/register.js');
__wxRoute = 'pages/install/install';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/install/install.js';

define('pages/install/install.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/install/install"],{"74b8":function(t,e,n){"use strict";var a=n("e469"),r=n.n(a);r.a},"7b38":function(t,e,n){"use strict";n.r(e);var a=n("81f6"),r=n("d699");for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);n("74b8");var s=n("2877"),u=Object(s["a"])(r["default"],a["a"],a["b"],!1,null,"2a6f7eca",null);e["default"]=u.exports},"81f6":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},r=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return r})},a858:function(t,e,n){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=s(n("a34a")),i=s(n("fb26"));function s(t){return t&&t.__esModule?t:{default:t}}function u(t,e,n,a,r,i,s){try{var u=t[i](s),c=u.value}catch(o){return void n(o)}u.done?e(c):Promise.resolve(c).then(a,r)}function c(t){return function(){var e=this,n=arguments;return new Promise(function(a,r){var i=t.apply(e,n);function s(t){u(i,a,r,s,c,"next",t)}function c(t){u(i,a,r,s,c,"throw",t)}s(void 0)})}}var o=function(){return n.e("components/navBar/uni-nav-bar/uni-nav-bar").then(n.bind(null,"0001"))},f={components:{uniNavBar:o},data:function(){return{installList:[{title:"个人信息",extend:""},{title:"收货地址",extend:""},{title:"实名认证",extend:"未认证"},{title:"银行卡",extend:"未设置"},{title:"登录密码",extend:""},{title:"支付密码",extend:""},{title:"服务协议",extend:""},{title:"常见问题",extend:""},{title:"隐私条款",extend:""}],url:"",userInfo:{uname:"18100000001",yzm:""},upassInfo:{upass:"111111",upass_confirm:"111111"},payInfo:{pay_pass:"",pay_pass_confirm:""},bankInfo:{bank_name:"",bank:"",bank_branch:"",bank_cardno:"",bank_mobile:"",mark_type:2},wxInfo:{wxpay_account:"wzy113028",wxpay_code:""},zfbInfo:{alipay_account:"",alipay_code:""},antonym:{identity_name:"",identity:"",identity_pic:""},profileInfo:{face:"",nick:"",sex:"",birthday:"",province:"",city:"",district:"",jieshao:"",img:""}}},onLoad:function(){},methods:{getSecurity:function(){var t=c(r.default.mark(function t(){var e;return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e={mobile:this.userInfo.uname},t.next=3,i.default.getSecurity(e);case 3:t.sent;case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),alterUserPwd:function(){var e=c(r.default.mark(function e(){var n;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return Object.assign(this.userInfo,this.upassInfo),e.next=3,this.$http.userService.alterUser(userpass);case 3:n=e.sent,console.log(t(n," at pages\\install\\install.vue:154"));case 5:case"end":return e.stop()}},e,this)}));function n(){return e.apply(this,arguments)}return n}(),alterPayPwd:function(){var t=c(r.default.mark(function t(){var e;return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.contrastSecurity(),e=Object.assign(this.userInfo,this.upassInfo),t.next=4,this.$http.userService.alterPayPwd(e);case 4:t.sent;case 5:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),alterUser:function(){var t=c(r.default.mark(function t(){return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.userService.alterUser(this.profileInfo);case 2:t.sent;case 3:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),bindingBankCard:function(){var t=c(r.default.mark(function t(){var e;return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=Object.assign(this.userInfo,this.bankInfo),t.next=3,this.$http.userService.bindingBankCard(e);case 3:t.sent;case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),bindingWX:function(){var e=c(r.default.mark(function e(){var n,a;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.wxInfo.wxpay_code=this.url,n=Object.assign(this.userInfo,this.wxInfo),e.next=4,this.$http.userService.bindingWX(n);case 4:a=e.sent,console.log(t(a," at pages\\install\\install.vue:190"));case 6:case"end":return e.stop()}},e,this)}));function n(){return e.apply(this,arguments)}return n}(),bindingZFB:function(){var t=c(r.default.mark(function t(){var e;return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.zfbInfo.alipay_code=this.url,e=Object.assign(this.userInfo,this.zfbInfo),t.next=4,this.$http.userService.bindingZFB(e);case 4:t.sent;case 5:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),antonymCertification:function(){var t=c(r.default.mark(function t(){return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.antonym.identity=this.url,t.next=3,this.$http.userService.antonymCertification(this.antonym);case 3:t.sent;case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),change:function(){var t=this;this.url,a.chooseImage({count:1,sizeType:["compressed"],sourceType:["album","camera"],success:function(e){t.urlTobase64(e.tempFilePaths[0])}})},urlTobase64:function(e){a.request({url:e,method:"GET",responseType:"arraybuffer",success:function(e){var n=wx.arrayBufferToBase64(e.data);n="data:image/jpeg;base64,"+n,console.log(t(n," at pages\\install\\install.vue:229"))}})}}};e.default=f}).call(this,n("0de9")["default"],n("6e42")["default"])},aa1a:function(t,e,n){"use strict";(function(t){n("8de5"),n("921b");a(n("66fd"));var e=a(n("7b38"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},d699:function(t,e,n){"use strict";n.r(e);var a=n("a858"),r=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);e["default"]=r.a},e469:function(t,e,n){}},[["aa1a","common/runtime","common/vendor"]]]);
});
require('pages/install/install.js');
__wxRoute = 'pages/bill/bill';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/bill/bill.js';

define('pages/bill/bill.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/bill/bill"],{"0069":function(t,n,e){"use strict";e.r(n);var u=e("d8f9"),r=e("7974");for(var i in r)"default"!==i&&function(t){e.d(n,t,function(){return r[t]})}(i);var a=e("2877"),o=Object(a["a"])(r["default"],u["a"],u["b"],!1,null,"0bb5815e",null);n["default"]=o.exports},"615f":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=r(e("a34a"));function r(t){return t&&t.__esModule?t:{default:t}}function i(t,n,e,u,r,i,a){try{var o=t[i](a),l=o.value}catch(c){return void e(c)}o.done?n(l):Promise.resolve(l).then(u,r)}function a(t){return function(){var n=this,e=arguments;return new Promise(function(u,r){var a=t.apply(n,e);function o(t){i(a,u,r,o,l,"next",t)}function l(t){i(a,u,r,o,l,"throw",t)}o(void 0)})}}var o={data:function(){return{billList:{},billIfon:{page:1}}},created:function(){this.getBill()},methods:{getBill:function(){var t=a(u.default.mark(function t(){var n;return u.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.billService.getBill(this.billIfon);case 2:n=t.sent,0==n.code&&(this.billList=n.data.data);case 4:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}(),jump:function(n){t.navigateTo({url:"./billInfo?id=".concat(n)})}}};n.default=o}).call(this,e("6e42")["default"])},7974:function(t,n,e){"use strict";e.r(n);var u=e("615f"),r=e.n(u);for(var i in u)"default"!==i&&function(t){e.d(n,t,function(){return u[t]})}(i);n["default"]=r.a},8534:function(t,n,e){"use strict";(function(t){e("8de5"),e("921b");u(e("66fd"));var n=u(e("0069"));function u(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},d8f9:function(t,n,e){"use strict";var u=function(){var t=this,n=t.$createElement;t._self._c},r=[];e.d(n,"a",function(){return u}),e.d(n,"b",function(){return r})}},[["8534","common/runtime","common/vendor"]]]);
});
require('pages/bill/bill.js');
__wxRoute = 'pages/bill/billInfo';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/bill/billInfo.js';

define('pages/bill/billInfo.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/bill/billInfo"],{6670:function(t,n,e){"use strict";(function(t){e("8de5"),e("921b");a(e("66fd"));var n=a(e("fd50"));function a(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},"95b2":function(t,n,e){"use strict";e.r(n);var a=e("adb7"),r=e.n(a);for(var i in a)"default"!==i&&function(t){e.d(n,t,function(){return a[t]})}(i);n["default"]=r.a},a4a2:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement;t._self._c},r=[];e.d(n,"a",function(){return a}),e.d(n,"b",function(){return r})},adb7:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=r(e("a34a"));function r(t){return t&&t.__esModule?t:{default:t}}function i(t,n,e,a,r,i,u){try{var l=t[i](u),o=l.value}catch(c){return void e(c)}l.done?n(o):Promise.resolve(o).then(a,r)}function u(t){return function(){var n=this,e=arguments;return new Promise(function(a,r){var u=t.apply(n,e);function l(t){i(u,a,r,l,o,"next",t)}function o(t){i(u,a,r,l,o,"throw",t)}l(void 0)})}}var l={data:function(){return{billDetails:{},parameter:{id:null}}},onLoad:function(t){this.parameter.id=t.id},created:function(){this.billInfo()},methods:{billInfo:function(){var n=u(a.default.mark(function n(){var e;return a.default.wrap(function(n){while(1)switch(n.prev=n.next){case 0:return console.log(t(this.parameter," at pages\\bill\\billInfo.vue:27")),n.next=3,this.$http.billService.billInfo(this.parameter);case 3:e=n.sent,0==e.code&&(this.billDetails=e.data),console.log(t(e," at pages\\bill\\billInfo.vue:32"));case 6:case"end":return n.stop()}},n,this)}));function e(){return n.apply(this,arguments)}return e}()}};n.default=l}).call(this,e("0de9")["default"])},fd50:function(t,n,e){"use strict";e.r(n);var a=e("a4a2"),r=e("95b2");for(var i in r)"default"!==i&&function(t){e.d(n,t,function(){return r[t]})}(i);var u=e("2877"),l=Object(u["a"])(r["default"],a["a"],a["b"],!1,null,null,null);n["default"]=l.exports}},[["6670","common/runtime","common/vendor"]]]);
});
require('pages/bill/billInfo.js');
__wxRoute = 'pages/transfer/transfer';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/transfer/transfer.js';

define('pages/transfer/transfer.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/transfer/transfer"],{"17fc":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(e("a34a"));function a(t){return t&&t.__esModule?t:{default:t}}function u(t,n,e,r,a,u,f){try{var c=t[u](f),i=c.value}catch(o){return void e(o)}c.done?n(i):Promise.resolve(i).then(r,a)}function f(t){return function(){var n=this,e=arguments;return new Promise(function(r,a){var f=t.apply(n,e);function c(t){u(f,r,a,c,i,"next",t)}function i(t){u(f,r,a,c,i,"throw",t)}c(void 0)})}}var c={data:function(){return{parameter:{page:1},transferList:{}}},methods:{getTransfer:function(){var t=f(r.default.mark(function t(){var n;return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.transferService.getTransfer(this.parameter);case 2:n=t.sent,0==n.code&&(this.transferList=n.data.data);case 4:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}(),jump:function(n){t.navigateTo({url:"./transferInfo?id=".concat(n)})}}};n.default=c}).call(this,e("6e42")["default"])},"22df":function(t,n,e){"use strict";(function(t){e("8de5"),e("921b");r(e("66fd"));var n=r(e("dfb9"));function r(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},d172:function(t,n,e){"use strict";var r=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"a",function(){return r}),e.d(n,"b",function(){return a})},d73a:function(t,n,e){"use strict";e.r(n);var r=e("17fc"),a=e.n(r);for(var u in r)"default"!==u&&function(t){e.d(n,t,function(){return r[t]})}(u);n["default"]=a.a},dfb9:function(t,n,e){"use strict";e.r(n);var r=e("d172"),a=e("d73a");for(var u in a)"default"!==u&&function(t){e.d(n,t,function(){return a[t]})}(u);var f=e("2877"),c=Object(f["a"])(a["default"],r["a"],r["b"],!1,null,"17bcfaa9",null);n["default"]=c.exports}},[["22df","common/runtime","common/vendor"]]]);
});
require('pages/transfer/transfer.js');
__wxRoute = 'pages/transfer/transferInfo';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/transfer/transferInfo.js';

define('pages/transfer/transferInfo.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/transfer/transferInfo"],{"23e1":function(t,n,e){"use strict";e.r(n);var r=e("b132"),a=e.n(r);for(var u in r)"default"!==u&&function(t){e.d(n,t,function(){return r[t]})}(u);n["default"]=a.a},"3b0c":function(t,n,e){"use strict";(function(t){e("8de5"),e("921b");r(e("66fd"));var n=r(e("554b"));function r(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},"554b":function(t,n,e){"use strict";e.r(n);var r=e("906c"),a=e("23e1");for(var u in a)"default"!==u&&function(t){e.d(n,t,function(){return a[t]})}(u);var o=e("2877"),i=Object(o["a"])(a["default"],r["a"],r["b"],!1,null,null,null);n["default"]=i.exports},"906c":function(t,n,e){"use strict";var r=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"a",function(){return r}),e.d(n,"b",function(){return a})},b132:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(e("a34a"));function a(t){return t&&t.__esModule?t:{default:t}}function u(t,n,e,r,a,u,o){try{var i=t[u](o),c=i.value}catch(f){return void e(f)}i.done?n(c):Promise.resolve(c).then(r,a)}function o(t){return function(){var n=this,e=arguments;return new Promise(function(r,a){var o=t.apply(n,e);function i(t){u(o,r,a,i,c,"next",t)}function c(t){u(o,r,a,i,c,"throw",t)}i(void 0)})}}var i={data:function(){return{transferDetails:{},parameter:{id:1}}},onLoad:function(t){this.parameter.id=t.id},created:function(){this.transferInfo()},methods:{transferInfo:function(){var t=o(r.default.mark(function t(){return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.transfeService.transferInfo(this.parameter);case 2:t.sent;case 3:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}()}};n.default=i}},[["3b0c","common/runtime","common/vendor"]]]);
});
require('pages/transfer/transferInfo.js');
__wxRoute = 'pages/withdrawal/withdrawal';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/withdrawal/withdrawal.js';

define('pages/withdrawal/withdrawal.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/withdrawal/withdrawal"],{"906a":function(t,e,n){"use strict";n.r(e);var a=n("b892"),r=n.n(a);for(var u in a)"default"!==u&&function(t){n.d(e,t,function(){return a[t]})}(u);e["default"]=r.a},b892:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(n("a34a"));function r(t){return t&&t.__esModule?t:{default:t}}function u(t,e,n,a,r,u,i){try{var c=t[u](i),o=c.value}catch(f){return void n(f)}c.done?e(o):Promise.resolve(o).then(a,r)}function i(t){return function(){var e=this,n=arguments;return new Promise(function(a,r){var i=t.apply(e,n);function c(t){u(i,a,r,c,o,"next",t)}function o(t){u(i,a,r,c,o,"throw",t)}c(void 0)})}}var c={data:function(){return{parameter:{page:1},withdrawalList:{}}},created:function(){this.getWithdrawal()},methods:{getWithdrawal:function(){var t=i(a.default.mark(function t(){var e;return a.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.withdrawalService.getWithdrawal(this.parameter);case 2:e=t.sent,0==e.code&&(this.withdrawalList=e.data.data);case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),jump:function(e){t.navigateTo({url:"./withdrawalInfo?id=".concat(e)})}}};e.default=c}).call(this,n("6e42")["default"])},b8b7:function(t,e,n){"use strict";(function(t){n("8de5"),n("921b");a(n("66fd"));var e=a(n("ebcd"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},ebcd:function(t,e,n){"use strict";n.r(e);var a=n("f5cf"),r=n("906a");for(var u in r)"default"!==u&&function(t){n.d(e,t,function(){return r[t]})}(u);var i=n("2877"),c=Object(i["a"])(r["default"],a["a"],a["b"],!1,null,"4fe50e3a",null);e["default"]=c.exports},f5cf:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},r=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return r})}},[["b8b7","common/runtime","common/vendor"]]]);
});
require('pages/withdrawal/withdrawal.js');
__wxRoute = 'pages/withdrawal/withdrawalInfo';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/withdrawal/withdrawalInfo.js';

define('pages/withdrawal/withdrawalInfo.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/withdrawal/withdrawalInfo"],{"106a":function(t,n,e){"use strict";e.r(n);var a=e("dedf"),r=e.n(a);for(var u in a)"default"!==u&&function(t){e.d(n,t,function(){return a[t]})}(u);n["default"]=r.a},"15a9":function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement;t._self._c},r=[];e.d(n,"a",function(){return a}),e.d(n,"b",function(){return r})},"507d":function(t,n,e){"use strict";(function(t){e("8de5"),e("921b");a(e("66fd"));var n=a(e("fc135"));function a(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},dedf:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=r(e("a34a"));function r(t){return t&&t.__esModule?t:{default:t}}function u(t,n,e,a,r,u,i){try{var o=t[u](i),c=o.value}catch(f){return void e(f)}o.done?n(c):Promise.resolve(c).then(a,r)}function i(t){return function(){var n=this,e=arguments;return new Promise(function(a,r){var i=t.apply(n,e);function o(t){u(i,a,r,o,c,"next",t)}function c(t){u(i,a,r,o,c,"throw",t)}o(void 0)})}}var o={data:function(){return{withdrawalDetails:{},parameter:{id:null}}},onLoad:function(t){this.parameter.id=t.id},created:function(){this.withdrawalInfo()},methods:{withdrawalInfo:function(){var t=i(a.default.mark(function t(){var n;return a.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.withdrawalService.withdrawalInfo(this.parameter);case 2:n=t.sent,0==n.code&&(this.withdrawalDetails=n.data);case 4:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}()}};n.default=o},fc135:function(t,n,e){"use strict";e.r(n);var a=e("15a9"),r=e("106a");for(var u in r)"default"!==u&&function(t){e.d(n,t,function(){return r[t]})}(u);var i=e("2877"),o=Object(i["a"])(r["default"],a["a"],a["b"],!1,null,null,null);n["default"]=o.exports}},[["507d","common/runtime","common/vendor"]]]);
});
require('pages/withdrawal/withdrawalInfo.js');
__wxRoute = 'pages/news/news';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/news/news.js';

define('pages/news/news.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/news/news"],{"25c4":function(e,t,n){"use strict";n.r(t);var r=n("9db3"),a=n("bc8f");for(var s in a)"default"!==s&&function(e){n.d(t,e,function(){return a[e]})}(s);n("8484");var i=n("2877"),u=Object(i["a"])(a["default"],r["a"],r["b"],!1,null,"0041cbbd",null);t["default"]=u.exports},"35e9":function(e,t,n){},"40e3":function(e,t,n){"use strict";(function(e){n("8de5"),n("921b");r(n("66fd"));var t=r(n("25c4"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},8484:function(e,t,n){"use strict";var r=n("35e9"),a=n.n(r);a.a},"9db3":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"a",function(){return r}),n.d(t,"b",function(){return a})},b7ab:function(e,t,n){"use strict";(function(e,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=s(n("a34a"));function s(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(null==e)return{};var n,r,a=u(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function u(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}function o(e,t,n,r,a,s,i){try{var u=e[s](i),o=u.value}catch(c){return void n(c)}u.done?t(o):Promise.resolve(o).then(r,a)}function c(e){return function(){var t=this,n=arguments;return new Promise(function(r,a){var s=e.apply(t,n);function i(e){o(s,r,a,i,u,"next",e)}function u(e){o(s,r,a,i,u,"throw",e)}i(void 0)})}}var f=function(){return n.e("components/navBar/uni-nav-bar/uni-nav-bar").then(n.bind(null,"0001"))},l={components:{uniNavBar:f},data:function(){return{newsLists:[],newsTypeList:[],typeAdvertising:[],parameter:{page:1,sort_id:0},activeTab:0}},created:function(){this.getNewsType()},methods:{getNewsType:function(){var t=c(a.default.mark(function t(){var n;return a.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.newsService.getNewsType();case 2:n=t.sent,this.newsTypeList=n.hasOwnProperty("code")&&0===n.code?n.data:[],console.log(e(this.newsTypeList," at pages\\news\\news.vue:33")),this.getNewsList();case 6:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}(),getNewsList:function(){var t=c(a.default.mark(function t(){var n,r,s,i=arguments;return a.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=i.length>0&&void 0!==i[0]?i[0]:0,r=i.length>1&&void 0!==i[1]?i[1]:0,console.log(e(n," at pages\\news\\news.vue:38")),this.parameter.sort_id=this.newsTypeList[n].id,this.parameter.page=r,t.next=7,this.$http.newsService.getNewsList(this.parameter);case 7:s=t.sent,this.newsLists=s.hasOwnProperty("code")&&0===s.code?s.data.data:[];case 9:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}(),getTypeAdvertising:function(){var t=c(a.default.mark(function t(){var n,r,s;return a.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=this.parameter,n.page,r=i(n,["page"]),t.next=3,this.$http.newsService.getTypeAdvertising(r);case 3:s=t.sent,console.log(e(s," at pages\\news\\news.vue:52"));case 5:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}(),jump:function(e){r.navigateTo({url:"./newsIofo?id=".concat(e)})}}};t.default=l}).call(this,n("0de9")["default"],n("6e42")["default"])},bc8f:function(e,t,n){"use strict";n.r(t);var r=n("b7ab"),a=n.n(r);for(var s in r)"default"!==s&&function(e){n.d(t,e,function(){return r[e]})}(s);t["default"]=a.a}},[["40e3","common/runtime","common/vendor"]]]);
});
require('pages/news/news.js');
__wxRoute = 'pages/news/newsInfo';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/news/newsInfo.js';

define('pages/news/newsInfo.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/news/newsInfo"],{5892:function(e,n,t){"use strict";t.r(n);var r=t("e2c2"),u=t("d767");for(var a in u)"default"!==a&&function(e){t.d(n,e,function(){return u[e]})}(a);var o=t("2877"),i=Object(o["a"])(u["default"],r["a"],r["b"],!1,null,null,null);n["default"]=i.exports},"7db5":function(e,n,t){"use strict";(function(e){t("8de5"),t("921b");r(t("66fd"));var n=r(t("5892"));function r(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("6e42")["createPage"])},"82bb":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=u(t("a34a"));function u(e){return e&&e.__esModule?e:{default:e}}function a(e,n,t,r,u,a,o){try{var i=e[a](o),c=i.value}catch(s){return void t(s)}i.done?n(c):Promise.resolve(c).then(r,u)}function o(e){return function(){var n=this,t=arguments;return new Promise(function(r,u){var o=e.apply(n,t);function i(e){a(o,r,u,i,c,"next",e)}function c(e){a(o,r,u,i,c,"throw",e)}i(void 0)})}}var i={data:function(){return{newsList:[],parameter:{id:null}}},onLoad:function(e){this.parameter.id=e.id},created:function(){this.getNewsInfo()},methods:{getNewsInfo:function(){var n=o(r.default.mark(function n(){var t;return r.default.wrap(function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,this.$http.newsService.getNewsInfo(this.parameter);case 2:t=n.sent,void 0!=t&&t.hasOwnProperty("code")&&console.log(e(t," at pages\\news\\newsInfo.vue:27"));case 4:case"end":return n.stop()}},n,this)}));function t(){return n.apply(this,arguments)}return t}()}};n.default=i}).call(this,t("0de9")["default"])},d767:function(e,n,t){"use strict";t.r(n);var r=t("82bb"),u=t.n(r);for(var a in r)"default"!==a&&function(e){t.d(n,e,function(){return r[e]})}(a);n["default"]=u.a},e2c2:function(e,n,t){"use strict";var r=function(){var e=this,n=e.$createElement;e._self._c},u=[];t.d(n,"a",function(){return r}),t.d(n,"b",function(){return u})}},[["7db5","common/runtime","common/vendor"]]]);
});
require('pages/news/newsInfo.js');
__wxRoute = 'pages/cart/cart';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/cart/cart.js';

define('pages/cart/cart.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/cart/cart"],{"0473":function(t,e,n){"use strict";n.r(e);var r=n("a039"),a=n.n(r);for(var u in r)"default"!==u&&function(t){n.d(e,t,function(){return r[t]})}(u);e["default"]=a.a},"247e":function(t,e,n){"use strict";var r=n("8a3b"),a=n.n(r);a.a},6003:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return a})},"8a3b":function(t,e,n){},a039:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(n("a34a"));function a(t){return t&&t.__esModule?t:{default:t}}function u(t,e,n,r,a,u,c){try{var i=t[u](c),o=i.value}catch(s){return void n(s)}i.done?e(o):Promise.resolve(o).then(r,a)}function c(t){return function(){var e=this,n=arguments;return new Promise(function(r,a){var c=t.apply(e,n);function i(t){u(c,r,a,i,o,"next",t)}function o(t){u(c,r,a,i,o,"throw",t)}i(void 0)})}}var i=function(){return n.e("components/navBar/uni-nav-bar/uni-nav-bar").then(n.bind(null,"0001"))},o={components:{uniNavBar:i},data:function(){return{cartList:[],parameter:{product_id:"",sku_id:"",action_type:"",product_num:"",title_right:"编辑"}}},created:function(){},methods:{addCart:function(){var e=c(r.default.mark(function e(){var n;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http.cartService.addCart(this.parameter);case 2:n=e.sent,console.log(t(n," at pages\\cart\\cart.vue:122"));case 4:case"end":return e.stop()}},e,this)}));function n(){return e.apply(this,arguments)}return n}(),getCart:function(){var e=c(r.default.mark(function e(){var n;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http.cartService.getCart(this.parameter);case 2:n=e.sent,console.log(t(n," at pages\\cart\\cart.vue:126"));case 4:case"end":return e.stop()}},e,this)}));function n(){return e.apply(this,arguments)}return n}(),setAmount:function(){var e=c(r.default.mark(function e(){var n;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http.cartService.setAmount(this.parameter);case 2:n=e.sent,console.log(t(n," at pages\\cart\\cart.vue:130"));case 4:case"end":return e.stop()}},e,this)}));function n(){return e.apply(this,arguments)}return n}(),checkall:function(){var e=c(r.default.mark(function e(){var n;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http.cartService.checkall(this.parameter);case 2:n=e.sent,console.log(t(n," at pages\\cart\\cart.vue:134"));case 4:case"end":return e.stop()}},e,this)}));function n(){return e.apply(this,arguments)}return n}(),deleteCart:function(){var e=c(r.default.mark(function e(){var n;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http.cartService.deleteCart(this.parameter);case 2:n=e.sent,console.log(t(n," at pages\\cart\\cart.vue:138"));case 4:case"end":return e.stop()}},e,this)}));function n(){return e.apply(this,arguments)}return n}()}};e.default=o}).call(this,n("0de9")["default"])},d10d:function(t,e,n){"use strict";n.r(e);var r=n("6003"),a=n("0473");for(var u in a)"default"!==u&&function(t){n.d(e,t,function(){return a[t]})}(u);n("247e");var c=n("2877"),i=Object(c["a"])(a["default"],r["a"],r["b"],!1,null,"aea5a644",null);e["default"]=i.exports},d59a:function(t,e,n){"use strict";(function(t){n("8de5"),n("921b");r(n("66fd"));var e=r(n("d10d"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])}},[["d59a","common/runtime","common/vendor"]]]);
});
require('pages/cart/cart.js');
__wxRoute = 'pages/index/test';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/test.js';

define('pages/index/test.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/test"],{"164c":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},u=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return u})},4900:function(t,e,n){"use strict";n.r(e);var a=n("164c"),u=n("d5c3");for(var r in u)"default"!==r&&function(t){n.d(e,t,function(){return u[t]})}(r);var i=n("2877"),c=Object(i["a"])(u["default"],a["a"],a["b"],!1,null,null,null);e["default"]=c.exports},"6d17":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){var t=this.getDate({format:!0});return{title:"picker",array:["中国","美国","巴西","日本"],index:0,date:t,time:"12:01"}},computed:{startDate:function(){return this.getDate("start")},endDate:function(){return this.getDate("end")}},methods:{bindPickerChange:function(e){console.log(t("picker发送选择改变，携带值为",e.target.value," at pages\\index\\test.vue:43")),this.index=e.target.value},bindDateChange:function(t){this.date=t.target.value},bindTimeChange:function(t){this.time=t.target.value},getDate:function(t){var e=new Date,n=e.getFullYear(),a=e.getMonth()+1,u=e.getDate();return"start"===t?n-=60:"end"===t&&(n+=2),a=a>9?a:"0"+a,u=u>9?u:"0"+u,"".concat(n,"-").concat(a,"-").concat(u)}}};e.default=n}).call(this,n("0de9")["default"])},"7d30":function(t,e,n){"use strict";(function(t){n("8de5"),n("921b");a(n("66fd"));var e=a(n("4900"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},d5c3:function(t,e,n){"use strict";n.r(e);var a=n("6d17"),u=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);e["default"]=u.a}},[["7d30","common/runtime","common/vendor"]]]);
});
require('pages/index/test.js');
__wxRoute = 'pages/category/category';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/category/category.js';

define('pages/category/category.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/category/category"],{"0667":function(n,t,e){"use strict";var u=e("fc13"),r=e.n(u);r.a},"263e":function(n,t,e){"use strict";e.r(t);var u=e("c50d"),r=e.n(u);for(var a in u)"default"!==a&&function(n){e.d(t,n,function(){return u[n]})}(a);t["default"]=r.a},8331:function(n,t,e){"use strict";e.r(t);var u=e("a42e"),r=e("263e");for(var a in r)"default"!==a&&function(n){e.d(t,n,function(){return r[n]})}(a);e("0667");var o=e("2877"),c=Object(o["a"])(r["default"],u["a"],u["b"],!1,null,"02560504",null);t["default"]=c.exports},a42e:function(n,t,e){"use strict";var u=function(){var n=this,t=n.$createElement;n._self._c},r=[];e.d(t,"a",function(){return u}),e.d(t,"b",function(){return r})},b599:function(n,t,e){"use strict";(function(n){e("8de5"),e("921b");u(e("66fd"));var t=u(e("8331"));function u(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},c50d:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=function(){return e.e("components/navBar/uni-nav-bar/uni-nav-bar").then(e.bind(null,"0001"))},r=function(){return e.e("components/uni-swiper-dot/uni-swiper-dot").then(e.bind(null,"f9ae"))},a={components:{uniNavBar:u,uniSwiperDot:r},data:function(){return{}},created:function(){},methods:{}};t.default=a},fc13:function(n,t,e){}},[["b599","common/runtime","common/vendor"]]]);
});
require('pages/category/category.js');
__wxRoute = 'pages/category/ranking';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/category/ranking.js';

define('pages/category/ranking.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/category/ranking"],{"103f":function(n,t,e){"use strict";(function(n){e("8de5"),e("921b");u(e("66fd"));var t=u(e("a95d"));function u(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},"2d19":function(n,t,e){"use strict";var u=function(){var n=this,t=n.$createElement;n._self._c},a=[];e.d(t,"a",function(){return u}),e.d(t,"b",function(){return a})},"68c6":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=function(){return e.e("components/uni-swiper-dot/uni-swiper-dot").then(e.bind(null,"f9ae"))},a=function(){return e.e("components/navBar/uni-nav-bar/uni-nav-bar").then(e.bind(null,"0001"))},r={components:{uniNavBar:a,uniSwiperDot:u},data:function(){return{tabNav:["综合","新品","价格","信用"]}}};t.default=r},"9b3c":function(n,t,e){},a95d:function(n,t,e){"use strict";e.r(t);var u=e("2d19"),a=e("e2c6");for(var r in a)"default"!==r&&function(n){e.d(t,n,function(){return a[n]})}(r);e("d267");var c=e("2877"),o=Object(c["a"])(a["default"],u["a"],u["b"],!1,null,"015bf96a",null);t["default"]=o.exports},d267:function(n,t,e){"use strict";var u=e("9b3c"),a=e.n(u);a.a},e2c6:function(n,t,e){"use strict";e.r(t);var u=e("68c6"),a=e.n(u);for(var r in u)"default"!==r&&function(n){e.d(t,n,function(){return u[n]})}(r);t["default"]=a.a}},[["103f","common/runtime","common/vendor"]]]);
});
require('pages/category/ranking.js');
__wxRoute = 'pages/goodsInfo/goodsInfo';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/goodsInfo/goodsInfo.js';

define('pages/goodsInfo/goodsInfo.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/goodsInfo/goodsInfo"],{"034f":function(n,t,e){"use strict";e.r(t);var a=e("b7d0"),u=e("04f8");for(var o in u)"default"!==o&&function(n){e.d(t,n,function(){return u[n]})}(o);e("6fb5");var r=e("2877"),f=Object(r["a"])(u["default"],a["a"],a["b"],!1,null,"25d2d93a",null);t["default"]=f.exports},"04f8":function(n,t,e){"use strict";e.r(t);var a=e("a397"),u=e.n(a);for(var o in a)"default"!==o&&function(n){e.d(t,n,function(){return a[n]})}(o);t["default"]=u.a},"312e":function(n,t,e){"use strict";(function(n){e("8de5"),e("921b");a(e("66fd"));var t=a(e("034f"));function a(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},"6fb5":function(n,t,e){"use strict";var a=e("c911"),u=e.n(a);u.a},a397:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(){return e.e("components/navBar/uni-nav-bar/uni-nav-bar").then(e.bind(null,"0001"))},u={components:{uniNavBar:a},data:function(){return{index:0,array:["中国","美国","巴西","日本"]}},methods:{bindPickerChange:function(t){console.log(n("picker发送选择改变，携带值为",t.target.value," at pages\\goodsInfo\\goodsInfo.vue:213")),this.index=t.target.value}}};t.default=u}).call(this,e("0de9")["default"])},b7d0:function(n,t,e){"use strict";var a=function(){var n=this,t=n.$createElement;n._self._c},u=[];e.d(t,"a",function(){return a}),e.d(t,"b",function(){return u})},c911:function(n,t,e){}},[["312e","common/runtime","common/vendor"]]]);
});
require('pages/goodsInfo/goodsInfo.js');
__wxRoute = 'pages/classification/classInfo';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/classification/classInfo.js';

define('pages/classification/classInfo.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/classification/classInfo"],{"57fb":function(n,t,e){"use strict";e.r(t);var a=e("b68f"),u=e.n(a);for(var r in a)"default"!==r&&function(n){e.d(t,n,function(){return a[n]})}(r);t["default"]=u.a},"645a":function(n,t,e){"use strict";e.r(t);var a=e("b2e6"),u=e("57fb");for(var r in u)"default"!==r&&function(n){e.d(t,n,function(){return u[n]})}(r);e("b14e");var c=e("2877"),f=Object(c["a"])(u["default"],a["a"],a["b"],!1,null,"53f12324",null);t["default"]=f.exports},ad16:function(n,t,e){},b14e:function(n,t,e){"use strict";var a=e("ad16"),u=e.n(a);u.a},b2e6:function(n,t,e){"use strict";var a=function(){var n=this,t=n.$createElement;n._self._c},u=[];e.d(t,"a",function(){return a}),e.d(t,"b",function(){return u})},b68f:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(){return e.e("components/navBar/uni-nav-bar/uni-nav-bar").then(e.bind(null,"0001"))},u={components:{uniNavBar:a},data:function(){return{}},methods:{}};t.default=u},ef4c:function(n,t,e){"use strict";(function(n){e("8de5"),e("921b");a(e("66fd"));var t=a(e("645a"));function a(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])}},[["ef4c","common/runtime","common/vendor"]]]);
});
require('pages/classification/classInfo.js');
;(function(global) {
    __uni_launch_ready(function() {
        var entryPagePath = __wxConfig.entryPagePath.replace('.html', '')
        if (entryPagePath.indexOf('/') !== 0) {
            entryPagePath = '/' + entryPagePath
        }
        wx.navigateTo({
            url: entryPagePath,
            query: {},
            openType: 'appLaunch',
            webviewId: 1
        })
        __wxConfig.__ready__ = true
    })
})(this);

