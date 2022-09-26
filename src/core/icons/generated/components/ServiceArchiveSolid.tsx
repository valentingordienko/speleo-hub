import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ServiceArchiveSolid.svg';

export function ServiceArchiveSolid(props: TProps) {
  return (
    <Icon {...props} name="ServiceArchiveSolid">
      <SVG />
    </Icon>
  );
}
