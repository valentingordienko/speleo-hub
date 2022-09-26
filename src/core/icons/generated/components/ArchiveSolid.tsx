import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ArchiveSolid.svg';

export function ArchiveSolid(props: TProps) {
  return (
    <Icon {...props} name="ArchiveSolid">
      <SVG />
    </Icon>
  );
}
