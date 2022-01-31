<script>
  import { Tabs, Tab, TabList, TabPanel } from "svelte-tabs";
  import Qa from "$lib/components/QA.svelte";
  import Toc from "$lib/components/TOC.svelte";
  import Drc from "$lib/components/DRC.svelte";
  import ChatBox from "$lib/components/ChatBox.svelte";
  import Notes from "$lib/components/Notes.svelte";
  import Feedback from "$lib/components/Feedback.svelte";
</script>

<svelte:head>
  <title>Courses | Tuna</title>
</svelte:head>

<main class="w-full mx-auto pb-24">
  <div class="w-full bg-black min-h-[33rem]" />
  <div class="container mx-auto my-10 min-h-screen  px-2 sm:px-0">
    <Tabs>
      <TabList>
        <Tab>Table of Content</Tab>
        <Tab>Description</Tab>
        <Tab>Notes</Tab>
        <Tab>Chat box</Tab>
        <Tab>Q&A</Tab>
        <Tab>Feedback</Tab>
      </TabList>

      <TabPanel>
        <Toc />
      </TabPanel>

      <TabPanel>
        <Drc />
      </TabPanel>

      <TabPanel>
        <Notes />
      </TabPanel>
      <TabPanel>
        <ChatBox />
      </TabPanel>

      <TabPanel>
        <Qa />
      </TabPanel>
      <TabPanel>
        <Feedback />
      </TabPanel>
    </Tabs>
  </div>
</main>
