(function() {var implementors = {
"arrow2":[["impl&lt;T: <a class=\"trait\" href=\"arrow2/bitmap/utils/trait.BitChunk.html\" title=\"trait arrow2::bitmap::utils::BitChunk\">BitChunk</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"arrow2/bitmap/utils/struct.BitChunks.html\" title=\"struct arrow2::bitmap::utils::BitChunks\">BitChunks</a>&lt;'_, T&gt;"],["impl&lt;T: <a class=\"trait\" href=\"arrow2/bitmap/utils/trait.BitChunk.html\" title=\"trait arrow2::bitmap::utils::BitChunk\">BitChunk</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"arrow2/bitmap/utils/struct.BitChunksExact.html\" title=\"struct arrow2::bitmap::utils::BitChunksExact\">BitChunksExact</a>&lt;'_, T&gt;"],["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"arrow2/io/parquet/read/struct.StructIterator.html\" title=\"struct arrow2::io::parquet::read::StructIterator\">StructIterator</a>&lt;'a&gt;"],["impl&lt;R: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Seek.html\" title=\"trait std::io::Seek\">Seek</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"arrow2/io/ipc/read/struct.FileReader.html\" title=\"struct arrow2::io::ipc::read::FileReader\">FileReader</a>&lt;R&gt;"],["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"arrow2/bitmap/utils/struct.SlicesIterator.html\" title=\"struct arrow2::bitmap::utils::SlicesIterator\">SlicesIterator</a>&lt;'a&gt;"],["impl&lt;R: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Seek.html\" title=\"trait std::io::Seek\">Seek</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"arrow2/io/parquet/read/struct.FileReader.html\" title=\"struct arrow2::io::parquet::read::FileReader\">FileReader</a>&lt;R&gt;"],["impl&lt;I: <a class=\"trait\" href=\"arrow2/types/trait.Index.html\" title=\"trait arrow2::types::Index\">Index</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"arrow2/types/struct.IndexRange.html\" title=\"struct arrow2::types::IndexRange\">IndexRange</a>&lt;I&gt;"],["impl&lt;T, I, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"arrow2/bitmap/utils/struct.ZipValidityIter.html\" title=\"struct arrow2::bitmap::utils::ZipValidityIter\">ZipValidityIter</a>&lt;T, I, V&gt;<span class=\"where fmt-newline\">where\n    I: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&lt;Item = T&gt;,\n    V: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&lt;Item = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a>&gt;,</span>"],["impl&lt;R: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"arrow2/io/ipc/read/struct.StreamReader.html\" title=\"struct arrow2::io::ipc::read::StreamReader\">StreamReader</a>&lt;R&gt;"],["impl&lt;R: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"arrow2/io/avro/read/struct.Reader.html\" title=\"struct arrow2::io::avro::read::Reader\">Reader</a>&lt;R&gt;"],["impl&lt;W, I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"arrow2/io/ndjson/write/struct.FileWriter.html\" title=\"struct arrow2::io::ndjson::write::FileWriter\">FileWriter</a>&lt;W, I&gt;<span class=\"where fmt-newline\">where\n    W: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>,\n    I: <a class=\"trait\" href=\"arrow2/io/parquet/write/trait.FallibleStreamingIterator.html\" title=\"trait arrow2::io::parquet::write::FallibleStreamingIterator\">FallibleStreamingIterator</a>&lt;Item = [<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>], Error = <a class=\"enum\" href=\"arrow2/error/enum.Error.html\" title=\"enum arrow2::error::Error\">Error</a>&gt;,</span>"],["impl&lt;T: <a class=\"trait\" href=\"arrow2/bitmap/utils/trait.BitChunk.html\" title=\"trait arrow2::bitmap::utils::BitChunk\">BitChunk</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"arrow2/types/struct.BitChunkOnes.html\" title=\"struct arrow2::types::BitChunkOnes\">BitChunkOnes</a>&lt;T&gt;"],["impl&lt;'a, L, R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"arrow2/compute/merge_sort/struct.MergeSortSlices.html\" title=\"struct arrow2::compute::merge_sort::MergeSortSlices\">MergeSortSlices</a>&lt;'a, L, R&gt;<span class=\"where fmt-newline\">where\n    L: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&lt;Item = &amp;'a <a class=\"type\" href=\"arrow2/compute/merge_sort/type.MergeSlice.html\" title=\"type arrow2::compute::merge_sort::MergeSlice\">MergeSlice</a>&gt;,\n    R: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&lt;Item = &amp;'a <a class=\"type\" href=\"arrow2/compute/merge_sort/type.MergeSlice.html\" title=\"type arrow2::compute::merge_sort::MergeSlice\">MergeSlice</a>&gt;,</span>"],["impl&lt;T: <a class=\"trait\" href=\"arrow2/bitmap/utils/trait.BitChunk.html\" title=\"trait arrow2::bitmap::utils::BitChunk\">BitChunk</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"arrow2/types/struct.BitChunkIter.html\" title=\"struct arrow2::types::BitChunkIter\">BitChunkIter</a>&lt;T&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"arrow2/io/parquet/read/struct.RowGroupDeserializer.html\" title=\"struct arrow2::io::parquet::read::RowGroupDeserializer\">RowGroupDeserializer</a>"],["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"arrow2/bitmap/utils/struct.BitmapIter.html\" title=\"struct arrow2::bitmap::utils::BitmapIter\">BitmapIter</a>&lt;'a&gt;"],["impl&lt;R: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Seek.html\" title=\"trait std::io::Seek\">Seek</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"arrow2/io/parquet/read/struct.RowGroupReader.html\" title=\"struct arrow2::io::parquet::read::RowGroupReader\">RowGroupReader</a>&lt;R&gt;"],["impl&lt;'a, A: ArrayAccessor&lt;'a&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"arrow2/array/struct.ArrayValuesIter.html\" title=\"struct arrow2::array::ArrayValuesIter\">ArrayValuesIter</a>&lt;'a, A&gt;"],["impl&lt;'a, T: <a class=\"trait\" href=\"arrow2/bitmap/utils/trait.BitChunk.html\" title=\"trait arrow2::bitmap::utils::BitChunk\">BitChunk</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"arrow2/bitmap/utils/struct.BitChunksExactMut.html\" title=\"struct arrow2::bitmap::utils::BitChunksExactMut\">BitChunksExactMut</a>&lt;'a, T&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"arrow2/bitmap/struct.IntoIter.html\" title=\"struct arrow2::bitmap::IntoIter\">IntoIter</a>"],["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"arrow2/compute/sort/row/struct.RowsIter.html\" title=\"struct arrow2::compute::sort::row::RowsIter\">RowsIter</a>&lt;'a&gt;"],["impl&lt;T, I, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"enum\" href=\"arrow2/bitmap/utils/enum.ZipValidity.html\" title=\"enum arrow2::bitmap::utils::ZipValidity\">ZipValidity</a>&lt;T, I, V&gt;<span class=\"where fmt-newline\">where\n    I: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&lt;Item = T&gt;,\n    V: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&lt;Item = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a>&gt;,</span>"],["impl&lt;A: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;dyn <a class=\"trait\" href=\"arrow2/array/trait.Array.html\" title=\"trait arrow2::array::Array\">Array</a>&gt; + 'static + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>, I: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&lt;Item = <a class=\"type\" href=\"arrow2/error/type.Result.html\" title=\"type arrow2::error::Result\">Result</a>&lt;<a class=\"struct\" href=\"arrow2/chunk/struct.Chunk.html\" title=\"struct arrow2::chunk::Chunk\">Chunk</a>&lt;A&gt;&gt;&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"arrow2/io/parquet/write/struct.RowGroupIterator.html\" title=\"struct arrow2::io::parquet::write::RowGroupIterator\">RowGroupIterator</a>&lt;A, I&gt;"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()