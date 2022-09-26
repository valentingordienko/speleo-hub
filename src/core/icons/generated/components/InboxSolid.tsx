import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/InboxSolid.svg';

export function InboxSolid(props: TProps) {
  return (
    <Icon {...props} name="InboxSolid">
      <SVG />
    </Icon>
  );
}
