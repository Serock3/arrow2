(function() {var implementors = {};
implementors["arrow2"] = [{"text":"impl&lt;'clone&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"arrow2/array/trait.Array.html\" title=\"trait arrow2::array::Array\">Array</a> + 'clone&gt;","synthetic":false,"types":["alloc::boxed::Box"]},{"text":"impl&lt;'clone&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"arrow2/array/trait.Array.html\" title=\"trait arrow2::array::Array\">Array</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'clone&gt;","synthetic":false,"types":["alloc::boxed::Box"]},{"text":"impl&lt;'clone&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"arrow2/array/trait.Array.html\" title=\"trait arrow2::array::Array\">Array</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'clone&gt;","synthetic":false,"types":["alloc::boxed::Box"]},{"text":"impl&lt;'clone&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"arrow2/array/trait.Array.html\" title=\"trait arrow2::array::Array\">Array</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'clone&gt;","synthetic":false,"types":["alloc::boxed::Box"]},{"text":"impl&lt;'a, O:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"arrow2/array/trait.Offset.html\" title=\"trait arrow2::array::Offset\">Offset</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"arrow2/array/struct.BinaryValueIter.html\" title=\"struct arrow2::array::BinaryValueIter\">BinaryValueIter</a>&lt;'a, O&gt;","synthetic":false,"types":["arrow2::array::binary::iterator::BinaryValueIter"]},{"text":"impl&lt;O:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"arrow2/array/trait.Offset.html\" title=\"trait arrow2::array::Offset\">Offset</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"arrow2/array/struct.BinaryArray.html\" title=\"struct arrow2::array::BinaryArray\">BinaryArray</a>&lt;O&gt;","synthetic":false,"types":["arrow2::array::binary::BinaryArray"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"arrow2/array/struct.BooleanArray.html\" title=\"struct arrow2::array::BooleanArray\">BooleanArray</a>","synthetic":false,"types":["arrow2::array::boolean::BooleanArray"]},{"text":"impl&lt;K:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"arrow2/array/trait.DictionaryKey.html\" title=\"trait arrow2::array::DictionaryKey\">DictionaryKey</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"arrow2/array/struct.DictionaryArray.html\" title=\"struct arrow2::array::DictionaryArray\">DictionaryArray</a>&lt;K&gt;","synthetic":false,"types":["arrow2::array::dictionary::DictionaryArray"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"arrow2/array/struct.FixedSizeBinaryArray.html\" title=\"struct arrow2::array::FixedSizeBinaryArray\">FixedSizeBinaryArray</a>","synthetic":false,"types":["arrow2::array::fixed_size_binary::FixedSizeBinaryArray"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"arrow2/array/struct.FixedSizeListArray.html\" title=\"struct arrow2::array::FixedSizeListArray\">FixedSizeListArray</a>","synthetic":false,"types":["arrow2::array::fixed_size_list::FixedSizeListArray"]},{"text":"impl&lt;O:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"arrow2/array/trait.Offset.html\" title=\"trait arrow2::array::Offset\">Offset</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"arrow2/array/struct.ListArray.html\" title=\"struct arrow2::array::ListArray\">ListArray</a>&lt;O&gt;","synthetic":false,"types":["arrow2::array::list::ListArray"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"arrow2/array/struct.MapArray.html\" title=\"struct arrow2::array::MapArray\">MapArray</a>","synthetic":false,"types":["arrow2::array::map::MapArray"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"arrow2/array/struct.NullArray.html\" title=\"struct arrow2::array::NullArray\">NullArray</a>","synthetic":false,"types":["arrow2::array::null::NullArray"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"arrow2/types/trait.NativeType.html\" title=\"trait arrow2::types::NativeType\">NativeType</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"arrow2/array/struct.MutablePrimitiveArray.html\" title=\"struct arrow2::array::MutablePrimitiveArray\">MutablePrimitiveArray</a>&lt;T&gt;","synthetic":false,"types":["arrow2::array::primitive::mutable::MutablePrimitiveArray"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"arrow2/types/trait.NativeType.html\" title=\"trait arrow2::types::NativeType\">NativeType</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"arrow2/array/struct.PrimitiveArray.html\" title=\"struct arrow2::array::PrimitiveArray\">PrimitiveArray</a>&lt;T&gt;","synthetic":false,"types":["arrow2::array::primitive::PrimitiveArray"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"arrow2/array/struct.StructArray.html\" title=\"struct arrow2::array::StructArray\">StructArray</a>","synthetic":false,"types":["arrow2::array::struct_::StructArray"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"arrow2/array/struct.UnionArray.html\" title=\"struct arrow2::array::UnionArray\">UnionArray</a>","synthetic":false,"types":["arrow2::array::union::UnionArray"]},{"text":"impl&lt;'a, O:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"arrow2/array/trait.Offset.html\" title=\"trait arrow2::array::Offset\">Offset</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"arrow2/array/struct.Utf8ValuesIter.html\" title=\"struct arrow2::array::Utf8ValuesIter\">Utf8ValuesIter</a>&lt;'a, O&gt;","synthetic":false,"types":["arrow2::array::utf8::iterator::Utf8ValuesIter"]},{"text":"impl&lt;O:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"arrow2/array/trait.Offset.html\" title=\"trait arrow2::array::Offset\">Offset</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"arrow2/array/struct.Utf8Array.html\" title=\"struct arrow2::array::Utf8Array\">Utf8Array</a>&lt;O&gt;","synthetic":false,"types":["arrow2::array::utf8::Utf8Array"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"arrow2/bitmap/struct.Bitmap.html\" title=\"struct arrow2::bitmap::Bitmap\">Bitmap</a>","synthetic":false,"types":["arrow2::bitmap::immutable::Bitmap"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"arrow2/bitmap/struct.MutableBitmap.html\" title=\"struct arrow2::bitmap::MutableBitmap\">MutableBitmap</a>","synthetic":false,"types":["arrow2::bitmap::mutable::MutableBitmap"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"arrow2/bitmap/utils/struct.BitmapIter.html\" title=\"struct arrow2::bitmap::utils::BitmapIter\">BitmapIter</a>&lt;'a&gt;","synthetic":false,"types":["arrow2::bitmap::utils::iterator::BitmapIter"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"arrow2/bitmap/utils/struct.SlicesIterator.html\" title=\"struct arrow2::bitmap::utils::SlicesIterator\">SlicesIterator</a>&lt;'a&gt;","synthetic":false,"types":["arrow2::bitmap::utils::slice_iterator::SlicesIterator"]},{"text":"impl&lt;'a, T, I:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&lt;Item = T&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"arrow2/bitmap/utils/struct.ZipValidity.html\" title=\"struct arrow2::bitmap::utils::ZipValidity\">ZipValidity</a>&lt;'a, T, I&gt;","synthetic":false,"types":["arrow2::bitmap::utils::zip_validity::ZipValidity"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"arrow2/buffer/struct.Buffer.html\" title=\"struct arrow2::buffer::Buffer\">Buffer</a>&lt;T&gt;","synthetic":false,"types":["arrow2::buffer::immutable::Buffer"]},{"text":"impl&lt;A:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;dyn <a class=\"trait\" href=\"arrow2/array/trait.Array.html\" title=\"trait arrow2::array::Array\">Array</a>&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"arrow2/chunk/struct.Chunk.html\" title=\"struct arrow2::chunk::Chunk\">Chunk</a>&lt;A&gt;","synthetic":false,"types":["arrow2::chunk::Chunk"]},{"text":"impl&lt;K:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"arrow2/array/trait.DictionaryKey.html\" title=\"trait arrow2::array::DictionaryKey\">DictionaryKey</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"arrow2/scalar/struct.DictionaryScalar.html\" title=\"struct arrow2::scalar::DictionaryScalar\">DictionaryScalar</a>&lt;K&gt;","synthetic":false,"types":["arrow2::scalar::dictionary::DictionaryScalar"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"arrow2/types/trait.NativeType.html\" title=\"trait arrow2::types::NativeType\">NativeType</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"arrow2/scalar/struct.PrimitiveScalar.html\" title=\"struct arrow2::scalar::PrimitiveScalar\">PrimitiveScalar</a>&lt;T&gt;","synthetic":false,"types":["arrow2::scalar::primitive::PrimitiveScalar"]},{"text":"impl&lt;O:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"arrow2/array/trait.Offset.html\" title=\"trait arrow2::array::Offset\">Offset</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"arrow2/scalar/struct.Utf8Scalar.html\" title=\"struct arrow2::scalar::Utf8Scalar\">Utf8Scalar</a>&lt;O&gt;","synthetic":false,"types":["arrow2::scalar::utf8::Utf8Scalar"]},{"text":"impl&lt;O:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"arrow2/array/trait.Offset.html\" title=\"trait arrow2::array::Offset\">Offset</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"arrow2/scalar/struct.BinaryScalar.html\" title=\"struct arrow2::scalar::BinaryScalar\">BinaryScalar</a>&lt;O&gt;","synthetic":false,"types":["arrow2::scalar::binary::BinaryScalar"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"arrow2/scalar/struct.BooleanScalar.html\" title=\"struct arrow2::scalar::BooleanScalar\">BooleanScalar</a>","synthetic":false,"types":["arrow2::scalar::boolean::BooleanScalar"]},{"text":"impl&lt;O:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"arrow2/array/trait.Offset.html\" title=\"trait arrow2::array::Offset\">Offset</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"arrow2/scalar/struct.ListScalar.html\" title=\"struct arrow2::scalar::ListScalar\">ListScalar</a>&lt;O&gt;","synthetic":false,"types":["arrow2::scalar::list::ListScalar"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"arrow2/scalar/struct.NullScalar.html\" title=\"struct arrow2::scalar::NullScalar\">NullScalar</a>","synthetic":false,"types":["arrow2::scalar::null::NullScalar"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"arrow2/scalar/struct.StructScalar.html\" title=\"struct arrow2::scalar::StructScalar\">StructScalar</a>","synthetic":false,"types":["arrow2::scalar::struct_::StructScalar"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"arrow2/scalar/struct.FixedSizeListScalar.html\" title=\"struct arrow2::scalar::FixedSizeListScalar\">FixedSizeListScalar</a>","synthetic":false,"types":["arrow2::scalar::fixed_size_list::FixedSizeListScalar"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"arrow2/scalar/struct.FixedSizeBinaryScalar.html\" title=\"struct arrow2::scalar::FixedSizeBinaryScalar\">FixedSizeBinaryScalar</a>","synthetic":false,"types":["arrow2::scalar::fixed_size_binary::FixedSizeBinaryScalar"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"arrow2/scalar/struct.UnionScalar.html\" title=\"struct arrow2::scalar::UnionScalar\">UnionScalar</a>","synthetic":false,"types":["arrow2::scalar::union::UnionScalar"]},{"text":"impl&lt;'clone&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"arrow2/scalar/trait.Scalar.html\" title=\"trait arrow2::scalar::Scalar\">Scalar</a> + 'clone&gt;","synthetic":false,"types":["alloc::boxed::Box"]},{"text":"impl&lt;'clone&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"arrow2/scalar/trait.Scalar.html\" title=\"trait arrow2::scalar::Scalar\">Scalar</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'clone&gt;","synthetic":false,"types":["alloc::boxed::Box"]},{"text":"impl&lt;'clone&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"arrow2/scalar/trait.Scalar.html\" title=\"trait arrow2::scalar::Scalar\">Scalar</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'clone&gt;","synthetic":false,"types":["alloc::boxed::Box"]},{"text":"impl&lt;'clone&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"arrow2/scalar/trait.Scalar.html\" title=\"trait arrow2::scalar::Scalar\">Scalar</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'clone&gt;","synthetic":false,"types":["alloc::boxed::Box"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"arrow2/types/simd/struct.u8x64.html\" title=\"struct arrow2::types::simd::u8x64\">u8x64</a>","synthetic":false,"types":["arrow2::types::simd::native::u8x64"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"arrow2/types/simd/struct.u16x32.html\" title=\"struct arrow2::types::simd::u16x32\">u16x32</a>","synthetic":false,"types":["arrow2::types::simd::native::u16x32"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"arrow2/types/simd/struct.u32x16.html\" title=\"struct arrow2::types::simd::u32x16\">u32x16</a>","synthetic":false,"types":["arrow2::types::simd::native::u32x16"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"arrow2/types/simd/struct.u64x8.html\" title=\"struct arrow2::types::simd::u64x8\">u64x8</a>","synthetic":false,"types":["arrow2::types::simd::native::u64x8"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"arrow2/types/simd/struct.i8x64.html\" title=\"struct arrow2::types::simd::i8x64\">i8x64</a>","synthetic":false,"types":["arrow2::types::simd::native::i8x64"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"arrow2/types/simd/struct.i16x32.html\" title=\"struct arrow2::types::simd::i16x32\">i16x32</a>","synthetic":false,"types":["arrow2::types::simd::native::i16x32"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"arrow2/types/simd/struct.i32x16.html\" title=\"struct arrow2::types::simd::i32x16\">i32x16</a>","synthetic":false,"types":["arrow2::types::simd::native::i32x16"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"arrow2/types/simd/struct.i64x8.html\" title=\"struct arrow2::types::simd::i64x8\">i64x8</a>","synthetic":false,"types":["arrow2::types::simd::native::i64x8"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"arrow2/types/simd/struct.f32x16.html\" title=\"struct arrow2::types::simd::f32x16\">f32x16</a>","synthetic":false,"types":["arrow2::types::simd::native::f32x16"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"arrow2/types/simd/struct.f64x8.html\" title=\"struct arrow2::types::simd::f64x8\">f64x8</a>","synthetic":false,"types":["arrow2::types::simd::native::f64x8"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"arrow2/types/simd/struct.f16x32.html\" title=\"struct arrow2::types::simd::f16x32\">f16x32</a>","synthetic":false,"types":["arrow2::types::simd::f16x32"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"arrow2/types/simd/struct.days_msx8.html\" title=\"struct arrow2::types::simd::days_msx8\">days_msx8</a>","synthetic":false,"types":["arrow2::types::simd::days_msx8"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"arrow2/types/simd/struct.months_days_nsx8.html\" title=\"struct arrow2::types::simd::months_days_nsx8\">months_days_nsx8</a>","synthetic":false,"types":["arrow2::types::simd::months_days_nsx8"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"arrow2/types/simd/struct.i128x8.html\" title=\"struct arrow2::types::simd::i128x8\">i128x8</a>","synthetic":false,"types":["arrow2::types::simd::i128x8"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"arrow2/types/struct.days_ms.html\" title=\"struct arrow2::types::days_ms\">days_ms</a>","synthetic":false,"types":["arrow2::types::native::days_ms"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"arrow2/types/struct.months_days_ns.html\" title=\"struct arrow2::types::months_days_ns\">months_days_ns</a>","synthetic":false,"types":["arrow2::types::native::months_days_ns"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"arrow2/types/struct.f16.html\" title=\"struct arrow2::types::f16\">f16</a>","synthetic":false,"types":["arrow2::types::native::f16"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"arrow2/types/enum.PrimitiveType.html\" title=\"enum arrow2::types::PrimitiveType\">PrimitiveType</a>","synthetic":false,"types":["arrow2::types::PrimitiveType"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"arrow2/compute/cast/struct.CastOptions.html\" title=\"struct arrow2::compute::cast::CastOptions\">CastOptions</a>","synthetic":false,"types":["arrow2::compute::cast::CastOptions"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"arrow2/compute/sort/struct.SortColumn.html\" title=\"struct arrow2::compute::sort::SortColumn\">SortColumn</a>&lt;'a&gt;","synthetic":false,"types":["arrow2::compute::sort::lex_sort::SortColumn"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"arrow2/compute/sort/struct.SortOptions.html\" title=\"struct arrow2::compute::sort::SortOptions\">SortOptions</a>","synthetic":false,"types":["arrow2::compute::sort::SortOptions"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"arrow2/io/csv/write/struct.SerializeOptions.html\" title=\"struct arrow2::io::csv::write::SerializeOptions\">SerializeOptions</a>","synthetic":false,"types":["arrow2::io::csv::write::serialize::SerializeOptions"]},{"text":"impl&lt;A:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, I:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"arrow2/io/json/write/struct.Serializer.html\" title=\"struct arrow2::io::json::write::Serializer\">Serializer</a>&lt;A, I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;dyn <a class=\"trait\" href=\"arrow2/array/trait.Array.html\" title=\"trait arrow2::array::Array\">Array</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;I: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&lt;Item = <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;A, <a class=\"enum\" href=\"arrow2/error/enum.Error.html\" title=\"enum arrow2::error::Error\">Error</a>&gt;&gt;,&nbsp;</span>","synthetic":false,"types":["arrow2::io::json::write::Serializer"]},{"text":"impl&lt;A:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, I:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"arrow2/io/ndjson/write/struct.Serializer.html\" title=\"struct arrow2::io::ndjson::write::Serializer\">Serializer</a>&lt;A, I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;dyn <a class=\"trait\" href=\"arrow2/array/trait.Array.html\" title=\"trait arrow2::array::Array\">Array</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;I: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&lt;Item = <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;A, <a class=\"enum\" href=\"arrow2/error/enum.Error.html\" title=\"enum arrow2::error::Error\">Error</a>&gt;&gt;,&nbsp;</span>","synthetic":false,"types":["arrow2::io::ndjson::write::Serializer"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"arrow2/io/ipc/read/struct.FileMetadata.html\" title=\"struct arrow2::io::ipc::read::FileMetadata\">FileMetadata</a>","synthetic":false,"types":["arrow2::io::ipc::read::file::FileMetadata"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"arrow2/io/ipc/read/struct.StreamMetadata.html\" title=\"struct arrow2::io::ipc::read::StreamMetadata\">StreamMetadata</a>","synthetic":false,"types":["arrow2::io::ipc::read::stream::StreamMetadata"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"arrow2/io/ipc/write/enum.Compression.html\" title=\"enum arrow2::io::ipc::write::Compression\">Compression</a>","synthetic":false,"types":["arrow2::io::ipc::write::common::Compression"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"arrow2/io/ipc/write/stream_async/struct.WriteOptions.html\" title=\"struct arrow2::io::ipc::write::stream_async::WriteOptions\">WriteOptions</a>","synthetic":false,"types":["arrow2::io::ipc::write::common::WriteOptions"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"arrow2/io/ipc/write/struct.Record.html\" title=\"struct arrow2::io::ipc::write::Record\">Record</a>&lt;'a&gt;","synthetic":false,"types":["arrow2::io::ipc::write::common::Record"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"arrow2/io/ipc/struct.IpcField.html\" title=\"struct arrow2::io::ipc::IpcField\">IpcField</a>","synthetic":false,"types":["arrow2::io::ipc::IpcField"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"arrow2/io/ipc/struct.IpcSchema.html\" title=\"struct arrow2::io::ipc::IpcSchema\">IpcSchema</a>","synthetic":false,"types":["arrow2::io::ipc::IpcSchema"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"arrow2/io/json_integration/struct.ArrowJsonColumn.html\" title=\"struct arrow2::io::json_integration::ArrowJsonColumn\">ArrowJsonColumn</a>","synthetic":false,"types":["arrow2::io::json_integration::ArrowJsonColumn"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"arrow2/io/parquet/write/enum.Nested.html\" title=\"enum arrow2::io::parquet::write::Nested\">Nested</a>&lt;'a&gt;","synthetic":false,"types":["arrow2::io::parquet::write::pages::Nested"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"arrow2/io/parquet/write/struct.WriteOptions.html\" title=\"struct arrow2::io::parquet::write::WriteOptions\">WriteOptions</a>","synthetic":false,"types":["arrow2::io::parquet::write::WriteOptions"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"arrow2/datatypes/struct.Field.html\" title=\"struct arrow2::datatypes::Field\">Field</a>","synthetic":false,"types":["arrow2::datatypes::field::Field"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"arrow2/datatypes/enum.PhysicalType.html\" title=\"enum arrow2::datatypes::PhysicalType\">PhysicalType</a>","synthetic":false,"types":["arrow2::datatypes::physical_type::PhysicalType"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"arrow2/datatypes/enum.IntegerType.html\" title=\"enum arrow2::datatypes::IntegerType\">IntegerType</a>","synthetic":false,"types":["arrow2::datatypes::physical_type::IntegerType"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"arrow2/datatypes/struct.Schema.html\" title=\"struct arrow2::datatypes::Schema\">Schema</a>","synthetic":false,"types":["arrow2::datatypes::schema::Schema"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"arrow2/datatypes/enum.DataType.html\" title=\"enum arrow2::datatypes::DataType\">DataType</a>","synthetic":false,"types":["arrow2::datatypes::DataType"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"arrow2/datatypes/enum.UnionMode.html\" title=\"enum arrow2::datatypes::UnionMode\">UnionMode</a>","synthetic":false,"types":["arrow2::datatypes::UnionMode"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"arrow2/datatypes/enum.TimeUnit.html\" title=\"enum arrow2::datatypes::TimeUnit\">TimeUnit</a>","synthetic":false,"types":["arrow2::datatypes::TimeUnit"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"arrow2/datatypes/enum.IntervalUnit.html\" title=\"enum arrow2::datatypes::IntervalUnit\">IntervalUnit</a>","synthetic":false,"types":["arrow2::datatypes::IntervalUnit"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()