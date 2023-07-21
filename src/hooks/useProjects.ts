import instance from "@/services/axios";
import { debounce } from "@mui/material";
import { useCallback, useEffect, useMemo, useState } from "react";

export function useProjects(
  { limit, page, search } = {
    limit: 10,
    page: 0,
    search: "",
  },
) {
  const [projects, setProjects] = useState<any[]>([]);

  const debounceSearchProject = useMemo(() => {
    return debounce(searchProjects, 500);
  }, [search]);

  useEffect(() => {
    fetchProjects();

    return () => {
      setProjects([]);
    };
  }, []);

  async function searchProjects(search: string) {
    const response = await instance.get("/project/search", {
      params: {
        q: search,
      },
    });

    setProjects(response.data);
  }

  async function fetchProjects() {
    const response = await instance.get("/project/all");

    setProjects(response.data);
  }

  return {
    projects,
    fetchProjects,
    searchProject: debounceSearchProject,
    searchProjects,
  };
}
